const path = require('path');

const PATH_ROOT = path.join(__dirname, './..');

const PATH_SOURCE = path.join(PATH_ROOT, '/src/index');
const PATH_BUILD = path.join(PATH_ROOT, '/public');


module.exports = {
  mode: 'development',

  entry: {
    app: [PATH_SOURCE],
  },
  output: {
    path: PATH_BUILD,
    filename: "[name].bundle.js",
    publicPath: "/"
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: PATH_BUILD,
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              sourceMap: true,
              localIdentName: '[name]_[local]__[hash:base64:10]'
            }
          }
        ]
      },

    ]
  },
  resolve: {
    extensions: [".js", ".css"],
    modules: ["node_modules", "src"]
  },
};
