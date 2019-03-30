const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('./webpack');

var args = process.argv.slice(2);

console.log(args);

module.exports = webpack.buildConfig([
  ['output', webpack.output],
  ['resolve', webpack.resolve],
  ['module', webpack.module],
  {
    mode: args.indexOf('--prod') === -1
      ? 'development'
      : 'production',
    plugins: [
      new CopyPlugin([
        { from: './public', to: '.' },
      ]),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      writeToDisk: true,
      port: 5000,
    },
  },
]);
