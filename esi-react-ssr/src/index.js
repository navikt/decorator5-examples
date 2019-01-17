import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Mustache from 'mustache';
import Express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = 7070;
const app = () => (<div>Hello there</div>);

const index = {
  html: fs.readFileSync(path.resolve(__dirname, '../index.html')).toString()
};

const render = (req, res) => {
  res.send(Mustache.render(index.html, { APP: ReactDOMServer.renderToString(app()) }));
}

const express = Express();
express.get('/', render);
express.get('', render);

express.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`);
});