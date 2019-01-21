# Decorator5 examples
## Running esi-react-ssr example

1. Run [decorator5-fragments-server](https://github.com/navikt/decorator5-fragments-server)
 (By default this runs on port 9000)
2. Run [esi-dev-proxy](https://github.com/navikt/esi-dev-proxy)
  (By default this runs on port 9898)
3. Run
```
  cd esi-react-ssr
  npm install
  npm run build
  npm run start
```
or
```
  npm run start-async
```

Goto [localhost](http://localhost:9898/)

### What index.html looks like [index.html](https://github.com/navikt/decorator5-examples/blob/master/esi-react-ssr/index.html)

```
  <html>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <esi:include src="http://127.0.0.1:9000/legacy/scripts" />
      <esi:include src="http://127.0.0.1:9000/legacy/styles" />
      <esi:include src="http://127.0.0.1:9000/legacy/megamenu" />
    </head>
    <body>
      <div class="pagewrapper">
        <esi:include src="http://127.0.0.1:9000/legacy/skiplinks" />
        <esi:include src="http://127.0.0.1:9000/legacy/header" />
        <div id="app">{{{APP}}}</div>
      </div>
      <esi:include src="http://127.0.0.1:9000/legacy/footer" />
    </body>
  </html>
```