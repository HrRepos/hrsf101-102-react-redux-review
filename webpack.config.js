const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, './public');
const CLIENT_DIR = path.resolve(__dirname, './client');

module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
