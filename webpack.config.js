const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = process.env.NODE_ENV
const devtool = mode === 'development' ? 'inline-source-map' : ''

module.exports = {
  mode,
  devtool,
  entry: {
    "main": path.resolve(__dirname, './src/index.tsx'),
    "dashboard": path.resolve(__dirname, "./src/components/dashboard.tsx"),
    "home": path.resolve(__dirname, "./src/components/home.tsx"),
    "login": path.resolve(__dirname, "./src/components/login.tsx"),
  },
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
    historyApiFallback: true,
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
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json'],
    alias: {
      'components': path.resolve(__dirname, './src/components/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}
