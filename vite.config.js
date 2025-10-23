import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [
    react({
      include: "**/*.{jsx,tsx,js,ts}",
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
      exclude: [
        "src/**/*.test.*",
        "src/**/*.stories.*",
        "tokens/**/*.stories.*",
        "**/*.stories.*",
      ],
    }),
  ],

  build: {
    emptyOutDir: false, // Don't clear dist directory - use build:clean for that
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

  // treat .js files as jsx, always
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  },
});
