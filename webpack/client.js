const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('.');

module.exports = webpack.buildConfig([
  ['output', webpack.outputByPath({
    path: path.join(__dirname, '../dist/client'),
  })],
  ['resolve', webpack.resolve],
  ['module', webpack.module],
  {
    entry: { main: './src/client' },
    mode: webpack.mode(),
    plugins: [
      new CopyPlugin([
        { from: './public', to: '.' },
      ]),
    ],
    devServer: {
      contentBase: path.join(__dirname, '../dist/client'),
      writeToDisk: true,
      port: 5000,
    },
  },
]);
