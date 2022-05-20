const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    ,module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        }, {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
        }
      ],
    },
  };