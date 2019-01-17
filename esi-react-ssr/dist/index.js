'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 7070;
var app = function app() {
  return _react2.default.createElement(
    'div',
    null,
    'Hello there'
  );
};

var index = {
  html: _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../index.html')).toString()
};

var render = function render(req, res) {
  console.log(_server2.default.renderToString(app()));
  res.send(_mustache2.default.render(index.html, { APP: _server2.default.renderToString(app()) }));
};

var express = (0, _express2.default)();
express.get('/', render);
express.get('', render);

express.listen(PORT, function () {
  console.log('Started on port: ' + PORT);
});