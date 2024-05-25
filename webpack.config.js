const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node', 
  output: {
    filename: 'index.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

