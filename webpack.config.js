
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node', 
  output: {
    filename: 'index.js', 
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

