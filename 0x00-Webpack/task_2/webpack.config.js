const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'basic app'
    })
  ]
};
