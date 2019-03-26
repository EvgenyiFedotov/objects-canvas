const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const defaultParams = {
  mode: 'development', // production || development
  path: 'dist',
};

const getConfig = (params = {}) => {
  const buildParams = {
    ...defaultParams,
    ...params,
  };

  return {
    output: {
      path: path.resolve(__dirname, buildParams.path),
      chunkFilename: '[name].js',
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
    },
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/i,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/flow'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }],
    },
    optimization: {
      minimizer: [new UglifyJsPlugin({
        cache: true,
        sourceMap: true,
      })],
    },
    mode: buildParams.mode,
    ...buildParams.config,
  };
};

module.exports = [
  getConfig({
    config: {
      entry: {
        main: './app',
      },
      plugins: [
        new CopyPlugin([
          { from: 'public', to: '.' },
        ]),
      ],
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
        port: 5000,
      },
    },
  }),
  getConfig({ path: 'lib' }),
];
