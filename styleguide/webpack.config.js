const path = require('path')

const SRC_PATH = path.resolve(__dirname, '../src')
const STYLEGUIDE_PATH = path.resolve(__dirname, '.')

const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.styleguide.json')
const BABELRC_PATH = path.resolve(__dirname, '.babelrc')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [SRC_PATH, STYLEGUIDE_PATH],
        exclude: ['/node_modules/'],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              extends: BABELRC_PATH,
            },
          },
          {
            loader: require.resolve('ts-loader'),
            options: {
              configFile: TSCONFIG_PATH,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
}
