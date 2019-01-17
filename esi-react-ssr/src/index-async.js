import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Mustache from 'mustache';
import Express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = 7070;
const app = () => (<div>Hello there</div>);

const index = {
  html: (req, res) => res.send(fs.readFileSync(path.resolve(__dirname, '../index-async.html')).toString())
};

const render = (req, res, next) => {
  const pause = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ReactDOMServer.renderToString(app()));
    },  3000);
  });
  pause
    .then((result) => {
      res.send(result);
      next();
    });
}

const express = Express();
express.get('/', index.html);
express.get('', index.html);
express.get('/app', render);

express.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`);
});