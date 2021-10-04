module.exports = {
  target: "web",
  entry: './src/js/app.js',
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: {
          loader: 'url-loader',
        },

      },
    ],
  },
};
