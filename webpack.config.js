module.exports = {
  // Outras configurações do Webpack...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  }
};
