module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
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