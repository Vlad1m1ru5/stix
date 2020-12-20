const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = process.env.NODE_ENV
const devtool = mode === 'development' ? 'inline-source-map' : ''

module.exports = {
  mode,
  devtool,
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    watchContentBase: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}
