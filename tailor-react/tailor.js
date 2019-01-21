'use strict';

const express = require('express');
const path = require('path');
const Tailor = require('node-tailor');
const fs = require('fs');

const PORT = 7070;
const server = express();

const template = fs.readFileSync(path.resolve(__dirname, './build/index.html')).toString();

const tailor = new Tailor({
    fetchTemplate: (req, parseTemplate) => {
      return new Promise((resolve, reject) => {
        resolve(parseTemplate(template));
      })
    }
});

const tailoredRenderer = (req, res) => {
  console.log(`Debug info: Tailor served ${req.path}`);
  tailor.requestHandler(req, res);
}

server.use(
  `/static`,
  express.static('build/static', { index: false }),
);

server.get('*', tailoredRenderer);

server.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`);
});

tailor.on('error', (request, error) => {
    console.log(error);
});