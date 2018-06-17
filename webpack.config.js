const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry:{
      globalStyles: ['./src/resources/styles/global.scss'],
      index: ["./src/index.tsx"],
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 8090,
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader?modules&importLoaders=1&localIdentName=[local]', 'sass-loader']
            })
          }
        ]
    },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}

module.exports = config;
