module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "vue"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest-testing-library-setup.js"],
};
