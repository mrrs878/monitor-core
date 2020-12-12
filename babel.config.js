/*
 * @Author: your name
 * @Date: 2020-12-11 19:26:32
 * @LastEditTime: 2020-12-12 10:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor-core\babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ];

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  return {
    plugins,
    presets,
  };
}