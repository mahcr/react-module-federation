const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = {
  entry: {    
    app: './src/index.js'
  },

  resolve: {
    extensions: ['.js']
  },

  devServer: {    
    port: 5001,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'  
    }),

    // MF Config
    new ModuleFederationPlugin({
      name: 'lib',
      filename: 'remoteEntry.js',
      remotes: {
        login: "login@http://localhost:5002/remoteEntry.js",
      },
      exposes: {
        './Header': './src/header/index'        
      },
      shared: {
        ...deps,
        'react-router-dom': {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        react: {
          singleton: true
        }
      }
    })
  ]
}
