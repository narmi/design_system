import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { writeFileSync } from "fs";
import { jsonModulePlugin } from "./vite.config.js";

// Marks dist/esm as ES modules so Node and bundlers interpret the .js
// files there as ESM despite the package root having no "type" field.
// sideEffects must be restated here: bundlers read the nearest
// package.json when checking it, so this file would otherwise shadow
// the root declaration and disable tree-shaking.
function esmPackageJsonPlugin() {
  return {
    name: "esm-package-json",
    closeBundle() {
      writeFileSync(
        resolve(__dirname, "dist/esm/package.json"),
        JSON.stringify({ type: "module", sideEffects: false }, null, 2) + "\n",
      );
    },
  };
}

// Unlike the UMD build (vite.config.js), which bundles all dependencies,
// the ESM build externalizes every bare import so consumers resolve
// dependencies from their own node_modules and bundlers can tree-shake
// per module. Internal ids are relative paths, absolute paths, or the
// "src" alias; everything else is a dependency.
const isExternal = (id) =>
  !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("src/");

export default defineConfig({
  plugins: [
    jsonModulePlugin(),
    react({
      include: /\.[tj]sx?$/,
      babel: {
        presets: [
          ["@babel/preset-env", { modules: false }],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: ["babel-plugin-transform-react-remove-prop-types"],
      },
    }),
    esmPackageJsonPlugin(),
  ],

  build: {
    emptyOutDir: false,
    outDir: "dist/esm",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
    },
    rolldownOptions: {
      external: isExternal,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },

  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
});
