var path = require('path');

module.exports = {
  entry: {
  	main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'scripts'),
    publicPath: "/scripts/"
  },
  watch: true
};