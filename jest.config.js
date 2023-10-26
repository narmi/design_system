module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^src(.*)": "<rootDir>/src$1",
  },
};
