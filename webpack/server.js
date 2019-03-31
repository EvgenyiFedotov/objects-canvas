const path = require('path');
const webpack = require('.');

module.exports = webpack.buildConfig([
  ['output', webpack.outputByPath({
    path: path.join(__dirname, '../dist/server'),
  })],
  ['resolve', webpack.resolve],
  ['module', webpack.module],
  {
    entry: { main: './src/server' },
    mode: webpack.mode(),
    devServer: {
      contentBase: path.join(__dirname, '../dist/server'),
      writeToDisk: true,
      port: 5001,
    },
  },
]);
