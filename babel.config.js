module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ">0.2%, not dead, not ie < 11, not op_mini all",
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    ["@babel/preset-react"],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  ],
};
