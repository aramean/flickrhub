const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = (env, argv) => {
  dotenv.config();
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/assets/webpack/template.html'
      }),
      new DotenvPlugin({
        path: isProduction ? './.env.production' : './.env',
      }),
    ],
    devServer: {
      port: process.env.PORT,
      open: true,
      hot: true,
    },
  };
};