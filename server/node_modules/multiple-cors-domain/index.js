'use strict';

/**
 * multiple-cors-domain
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const assert = require('assert');
const parseURL = require('url').parse;

/**
 * Returns multiple-cors-domain middleware
 *
 * @param {Object} options
 *   - {Array} domain   a list of domains
 *   - {Boolean} any    allow any domain
 *   - {Object} headers additional headers
 *   - {Number} maxAge
 *   - {Boolean} credentials
 *   - {Array} allowHeaders
 *   - {Array} allowMethods
 */
function multipleCORSDomain(options) {

  assert(options, `missing options`);
  options = Object.assign({}, options);
  options.headers = Object.assign({}, options.headers || {});

  if (options.any) {
    assert(options.any === true, `invalid 'any' option: must be true`);
  } else {
    assert(Array.isArray(options.domain), `invalid 'domain' option: must be an array`);
    assert(options.domain.length > 0, `invalid 'domain' option: must have at least one item`);
  }

  if ('maxAge' in options) {
    assert(options.maxAge > 0, `invalid 'maxAge' option: must be greater than 0`);
    options.headers['Access-Control-Max-Age'] = String(options.maxAge);
  }
  if ('credentials' in options) {
    assert(typeof options.credentials === 'boolean', `invalid 'credentials' option: must be true or false`);
    options.headers['Access-Control-Allow-Credentials'] = String(options.credentials);
  }
  if ('allowHeaders' in options) {
    assert(Array.isArray(options.allowHeaders), `invalid 'allowHeaders' option: must be an array`);
    options.headers['Access-Control-Allow-Headers'] = options.allowHeaders.join(', ');
  }
  if ('allowMethods' in options) {
    assert(Array.isArray(options.allowMethods), `invalid 'allowMethods' option: must be an array`);
    options.headers['Access-Control-Allow-Methods'] = options.allowMethods.join(', ');
  }

  function setAdditionalHeaders(res) {
    if (options.headers) {
      for (const name in options.headers) {
        res.setHeader(name, options.headers[name]);
      }
    }
  }

  if (options.any) {
    return function (req, res, next) {
      const origin = req.headers.origin;
      if (origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        setAdditionalHeaders(res);
      }
      next();
    };
  }

  return function (req, res, next) {
    const origin = req.headers.origin;
    const info = parseURL(origin);
    if (origin && options.domain.indexOf(info.host) !== -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      setAdditionalHeaders(res);
    }
    next();
  };
}

module.exports = multipleCORSDomain;
