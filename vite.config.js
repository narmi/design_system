import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readFileSync } from "fs";
import dts from "vite-plugin-dts";

// Workaround: Rolldown (Vite 8) fails to auto-detect module type for
// JSON files imported via path aliases. This plugin explicitly loads
// project JSON files as JS modules with both default and named exports.
// https://vite.dev/guide/migration.html#module-type-support-and-auto-detection
function jsonModulePlugin() {
  return {
    name: "force-json-module",
    enforce: "pre",
    load: {
      filter: { id: /\.json$/ },
      handler(id) {
        if (id.includes("node_modules")) return;
        const content = readFileSync(id, "utf-8");
        const data = JSON.parse(content);
        // Generate named exports for object keys that are valid identifiers
        let namedExports = "";
        if (typeof data === "object" && data !== null && !Array.isArray(data)) {
          namedExports = Object.keys(data)
            .filter((key) => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key))
            .map(
              (key) => `export const ${key} = _json[${JSON.stringify(key)}];`,
            )
            .join("\n");
        }
        return {
          code: `const _json = ${content};\nexport default _json;\n${namedExports}`,
          moduleType: "js",
        };
      },
    },
  };
}

export default defineConfig({
  assetsInclude: ["**/*.md"],
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
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
      include: ["src/**/*"],
      exclude: [
        "src/**/*.test.*",
        "src/**/*.stories.*",
        "tokens/**/*.stories.*",
        "**/*.stories.*",
      ],
    }),
  ],

  build: {
    target: "es2020",
    emptyOutDir: false, // Don't clear dist directory - use build:clean for that
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "NarmiDesignSystem",
      formats: ["umd"],
      fileName: () => "index.js",
    },
    rolldownOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            assetInfo.name.match(/\.(woff2?|ttf|eot|svg)$/)
          ) {
            return "fonts/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
    sourcemap: true,
    outDir: "dist",
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
