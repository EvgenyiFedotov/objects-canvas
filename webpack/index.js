const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const checkConfig = (config, params = {}) => (
  config instanceof Function
    ? config(params)
    : config
);

const buildBlockConfig = (key, config, params = {}) => ({
  [key]: checkConfig(config, params),
});

const output = () => ({
  chunkFilename: '[name].js',
  filename: '[name].js',
});

module.exports = {
  output,

  outputByPath: ({ path }) => ({
    ...output(),
    path,
  }),

  resolve: () => ({
    extensions: ['.js'],
    modules: ['node_modules'],
  }),

  module: () => ({
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
  }),

  optimization: () => ({
    minimizer: [new UglifyJsPlugin({
      cache: true,
      sourceMap: true,
    })],
  }),

  buildConfig: (listConfigs, params = {}) => (
    listConfigs.reduce((res, config) => ({
      ...res,
      ...(
        (config instanceof Array && config.length)
          ? buildBlockConfig(config[0], config[1], params)
          : checkConfig(config, params)
      ),
    }), {})
  ),

  checkConfig,

  buildBlockConfig,
};
