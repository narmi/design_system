import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          ["@babel/preset-env", { modules: false }],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: ["@babel/plugin-proposal-class-properties"],
      },
    }),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
      include: ["src/**/*"],
      exclude: ["src/**/*.test.*", "src/**/*.stories.*"],
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "NarmiDesignSystem",
      formats: ["umd"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "style.css";
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
    cssCodeSplit: false,
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
