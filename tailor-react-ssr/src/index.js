import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import fs from 'fs';
import path from 'path';
const Tailor = require('node-tailor');

const PORT = 7070;

const index = {
  html: fs.readFileSync(path.resolve(__dirname, '../index.html')).toString()
};

const tailor = new Tailor({
  fetchTemplate: (req, parseTemplate) => {
    return new Promise((resolve, reject) => {
      resolve(parseTemplate(index.html));
    })
  }
});

const app = () => (<div>Hello there</div>);

const render = (req, res) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.send(ReactDOMServer.renderToString(app())));
    }, 3000);
  })
}

const tailoredRenderer = (req, res) => {
  tailor.requestHandler(req, res);
}

const express = Express();

express.get('/app', render);
express.get('*', tailoredRenderer);

express.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`);
});