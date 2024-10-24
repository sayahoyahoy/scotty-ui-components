const {StylableWebpackPlugin} = require('@stylable/webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new StylableWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    }),
  ],
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
}
