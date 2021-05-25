const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      components: path.join(__dirname, "src", "components"),
    },
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /stories.js/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
  ],
};
