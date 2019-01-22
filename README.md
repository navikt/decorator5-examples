# Decorator5 examples
## Running esi-react-ssr example (based on [esi](https://www.akamai.com/us/en/support/esi.jsp) and [nodesi](https://github.com/Schibsted-Tech-Polska/nodesi) )

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

## Running tailor-react example (based on [tailor](https://github.com/zalando/tailor))

1. Run [decorator5-fragments-server](https://github.com/navikt/decorator5-fragments-server)
 (By default this runs on port 9000)
2. Run
```
  cd tailor-react
  npm install
  npm run build
  node tailor.js
```
3. Goto [localhost](http://localhost:7070/)


## Running tailor-react-ssr example (based on [tailor](https://github.com/zalando/tailor))

1. Run [decorator5-fragments-server](https://github.com/navikt/decorator5-fragments-server)
 (By default this runs on port 9000)
2. Run
```
  cd tailor-react-ssr
  npm run build && npm run start
```
3. Goto [localhost](http://localhost:7070/)

### What index.html looks like [index.html](https://github.com/navikt/decorator5-examples/blob/master/tailor-react-ssr/index.html)

```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>React App</title>
      <fragment src="http://127.0.0.1:9000/legacy/scripts"></fragment>
      <fragment src="http://127.0.0.1:9000/legacy/styles"></fragment>
      <fragment src="http://127.0.0.1:9000/legacy/megamenu"></fragment>
    </head>
    <body>
      <fragment src="http://127.0.0.1:9000/legacy/skiplinks"></fragment>
      <fragment src="http://127.0.0.1:9000/legacy/header"></fragment>
      <fragment src="http://127.0.0.1:7070/app" async timeout="6000"></fragment>
      <fragment src="http://127.0.0.1:9000/legacy/footer"></fragment>
    </body>
  </html>
```