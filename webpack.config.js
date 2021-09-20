const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: './client/src',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: require.resolve('babel-loader'),
        options: { presets: ["@babel/env"], plugins: [isDevelopment && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
        },        
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          'resolve-url-loader',
          // Compiles Sass to CSS
          {
            loader:"sass-loader",
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [ isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "App.js"
  },
  devServer: {
      host: '0.0.0.0',
    contentBase: path.join(__dirname, "client/public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",

  },
};