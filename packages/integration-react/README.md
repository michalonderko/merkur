<center>
  <h1 style="font-family: Helvetica, Arial, sans-serif; font-size:60px;">Merkur</h1>
</center>

[![Build Status](https://travis-ci.com/mjancarik/merkur.svg?branch=master)](https://travis-ci.com/mjancarik/merkur)
[![NPM package version](https://img.shields.io/npm/v/@merkur/core/latest.svg)](https://www.npmjs.com/package/@merkur/core)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/@merkur/core/latest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Merkur

The [Merkur](https://merkur.js.org/) is tiny extensible javascript library for front-end microservices. It allows by default server side rendering for loading performance boost. You can connect it with other frameworks or languages because merkur defines easy API. You can use one of four predefined template's library [React](https://reactjs.org/), [Preact](https://preactjs.com/), [hyperHTML](https://viperhtml.js.org/hyper.html) and [µhtml](https://github.com/WebReflection/uhtml#readme) but you can easily extend for others.

## Getting started

```bash
npx @merkur/create-widget <name>

cd name

npm run dev // Point your browser at http://localhost:4444/
```
<p align="center">
  <img alt="Merkur example, hello widget" src="https://raw.githubusercontent.com/mjancarik/merkur/master/images/hello-widget.png" />
</p>

## API

Point your browser at `http://localhost:4444/widget`.

```json
{
  "name":"my-widget",
  "version":"0.0.1",
  "props":{},
  "state":{"counter":0},
  "assets":[
    {
      "name": "widget.js",
      "type": "script",
      "source": {
        "es9": "http://localhost:4444/static/es9/widget.6961af42bfa3596bb147.js",
        "es5": "http://localhost:4444/static/es5/widget.31c5090d8c961e43fade.js"
      }
    },
    {
      "name": "widget.css",
      "type": "stylesheet",
      "source": "http://localhost:4444/static/es9/widget.814e0cb568c7ddc0725d.css"
    }
  ],
  "html":"\n      <div class=\"merkur__page\">\n        <div class=\"merkur__headline\">\n          <div class=\"merkur__view\">\n            \n    <div class=\"merkur__icon\">\n      <img src=\"http://localhost:4444/static/merkur-icon.png\" alt=\"Merkur\">\n    </div>\n  \n            \n    <h1>Welcome to <a href=\"https://github.com/mjancarik/merkur\">MERKUR</a>,<br> a javascript library for front-end microservices.</h1>\n  \n            \n    <p>The widget's name is <strong>my-widget@0.0.1</strong>.</p>\n  \n          </div>\n        </div>\n        <div class=\"merkur__view\">\n          \n    <div>\n      <h2>Counter widget:</h2>\n      <p>Count: 0</p>\n      <button onclick=\"return ((...rest) =&gt; {\n        return originalFunction(widget, ...rest);\n      }).call(this, event)\">\n        increase counter\n      </button>\n      <button onclick=\"return ((...rest) =&gt; {\n        return originalFunction(widget, ...rest);\n      }).call(this, event)\">\n        reset counter\n      </button>\n    </div>\n  \n        </div>\n      </div>\n  "
}
```