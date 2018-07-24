module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /method-2.*\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /method-3.*\.css$/,
        use: ['style-loader', 'css-loader?modules']
      }
    ]
  }
};