const path = require('path');

module.exports = {
  entry: './node_modules/typescript/lib/typescriptServices.js',
  target: 'web',
  output: {
    filename: 'typescriptServices.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};
