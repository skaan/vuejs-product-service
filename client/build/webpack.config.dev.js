const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
      path: __dirname + '/dist/',
      publicPath: 'dist/',
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      hot: true,
      watchOptions: {
        poll: true
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin()
    ]
  }
}