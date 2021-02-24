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

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'    
  },

  devServer: {
    historyApiFallback: true,
    port: 5000,
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
      template: 'public/index.html',      
    }),

    // MF Config
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        lib: "lib@http://localhost:5001/remoteEntry.js",
        login: "login@http://localhost:5002/remoteEntry.js",
        dashboard: "dashboard@http://localhost:5003/remoteEntry.js",
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
        },        
      }
    })
  ]
}
