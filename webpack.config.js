var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.ts",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loaders: ['ts-loader']},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      template:'index.ejs'
    })],
    devServer: {
       historyApiFallback: true,
       inline: true,
       progress: true,
       contentBase: './app',
       port: 8080,
   },
};
