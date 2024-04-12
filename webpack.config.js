module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp3|png|jp(e*)g|svg)$/,
        type: 'asset/inline'
      },
    ],
  },
};
