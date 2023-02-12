const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    header: {
      import: "./modules/header/header.js",
      dependOn: "shared",
    },
    body: {
      import: "./modules/body/body.js",
      dependOn: "shared",
    },
    footer: {
      import: "./modules/footer/footer.js",
      dependOn: "shared",
    },
    shared: "jquery",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 8564,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "basic app",
    }),
    new CleanWebpackPlugin(),
  ],
};
