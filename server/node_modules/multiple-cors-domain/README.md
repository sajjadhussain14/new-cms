[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/multiple-cors-domain.svg?style=flat-square
[npm-url]: https://npmjs.org/package/multiple-cors-domain
[travis-image]: https://img.shields.io/travis/leizongmin/node-multiple-cors-domain.svg?style=flat-square
[travis-url]: https://travis-ci.org/leizongmin/node-multiple-cors-domain
[coveralls-image]: https://img.shields.io/coveralls/leizongmin/node-multiple-cors-domain.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/leizongmin/node-multiple-cors-domain?branch=master
[david-image]: https://img.shields.io/david/leizongmin/node-multiple-cors-domain.svg?style=flat-square
[david-url]: https://david-dm.org/leizongmin/node-multiple-cors-domain
[node-image]: https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/multiple-cors-domain.svg?style=flat-square
[download-url]: https://npmjs.org/package/multiple-cors-domain
[license-image]: https://img.shields.io/npm/l/multiple-cors-domain.svg


# multiple-cors-domain
Connect middleware that allow multiple CORS domain

## Installation

```bash
$ npm install multiple-cors-domain --save
```

## Usage

```javascript
const multipleCORSDomain = require('multiple-cors-domain');

// allow any domain
app.use(multipleCORSDomain({ any: true }));

// allow a list of domains
app.use(multipleCORSDomain({ domain: [ 'a.com', 'b.com', 'c.com:3000' ] }));

// other options
app.use(multipleCORSDomain({
  any: true,
  // set additional headers
  headers: {
    'Header-A': '12345',
    'Header-B': 'Hello',
  },
  // Access-Control-Allow-Credentials: true
  credentials: true,
  // Access-Control-Max-Age
  maxAge: 3600,
  // Access-Control-Allow-Headers: Header-A, Header-B
  allowHeaders: [ 'Header-A', 'Header-B' ],
  // Access-Control-Allow-Methods: DELETE
  allowMethods: [ 'DELETE' ],
}));
```


## License

```
MIT License

Copyright (c) 2017 Zongmin Lei <leizongmin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
