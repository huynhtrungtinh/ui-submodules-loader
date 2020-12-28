const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet')

app.use(function applyXFrame(req, res, next) {
  res.set('X-Frame-Options', 'DENY');
  next();
});
app.use(function applyCSP(req, res, next) {
  res.set('Content-Security-Policy', "frame-ancestors 'none';");
  next();
});
app.use(helmet())

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000
app.listen(port);
console.log('====================================');
console.log('app:"/" :start port:' + port);
console.log('====================================');
