const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
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

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          {
            test: /\.s?css$/,                    // made scss
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
