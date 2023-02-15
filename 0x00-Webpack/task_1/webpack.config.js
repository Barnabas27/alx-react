const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    entry: {
        bundle:path.resolve(__dirname, "./js/dashboard_main.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "learning webpack"
        }),
    ],
};