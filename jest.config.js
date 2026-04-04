module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-markdown|unified|bail|devlop|is-plain-obj|trough|vfile|vfile-message|property-information|comma-separated-tokens|space-separated-tokens|trim-lines|ccount|escape-string-regexp|character-entities|decode-named-character-reference|html-url-attributes|micromark[^/]*|remark-[^/]*|rehype-[^/]*|mdast-[^/]*|hast-[^/]*|unist-[^/]*|estree-[^/]*)/)",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^src(.*)": "<rootDir>/src$1",
  },
};
