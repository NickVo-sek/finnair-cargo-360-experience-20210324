const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  env.version = require('./package.json').version

  console.log(env)

  const ENV_VARIABLES = env
  const destFolder = path.resolve(__dirname, 'dist/')

  return {
    watch: env.watch,
    entry: ['babel-polyfill','./src/js/main.js'],
    output: {
      filename: 'main.js',
      path: destFolder
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.DefinePlugin({
        'process.env.VERSION': `'${env.VERSION}'`
      }),
      new HtmlWebpackPlugin({
        title: 'Finnair COOL cargo terminal 360° experience',
        template: 'src/html/root.html',
        environment: ENV_VARIABLES
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
      })
    ],
    module: {
      rules: [
      {
        test: /\.(mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          env.development ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
      }]
    }
  }
}
