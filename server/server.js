const path = require('path');
// const express = require('express');
// const app = express();
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');

// const compiler = webpack(webpackConfig);

// app.use(express.static(path.join(__dirname, '../client')));

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));

// const server = app.listen(3000, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log('App listening at http://', host, port)
// });

// app.get('/', function (req, res) {
//   res.send('connected')
// });

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '../client')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
