/*
 * @Author: your name
 * @Date: 2020-12-12 11:59:46
 * @LastEditTime: 2020-12-12 15:49:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor-core\jest.config.js
 */
module.exports = {
  preset: "ts-jest",
  testMatch: [
    "<rootDir>/test/**/*.(spec|test).ts?(x)",
    "<rootDir>/test/**/*.(spec|test).js?(x)",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js",
  ],
};