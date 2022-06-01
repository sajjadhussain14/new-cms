'use strict';

/**
 * multiple-cors-domain tests
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const expect = require('chai').expect;
const supertest = require('supertest');
const connect = require('connect');
const multipleCORSDomain = require('../');

describe('multiple-cors-domain', function () {

  describe('any = true', function () {
    it('http', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect(200, done);
    });
    it('https', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'https://example.com')
        .expect('Access-Control-Allow-Origin', 'https://example.com')
        .expect(200, done);
    });
  });

  describe('domain = list', function () {
    it('in list', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        domain: [ 'example.com' ],
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect(200, done);
    });
    it('not in list', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        domain: [ 'example.com' ],
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://ucdok.com')
        .expect(res => {
          expect(res.headers).to.not.have.property('access-control-allow-origin');
        })
        .expect(200, done);
    });
  });

  describe('other options', function () {
    it('credentials', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
        credentials: true,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect('Access-Control-Allow-Credentials', 'true')
        .expect(200, done);
    });
    it('maxAge', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
        maxAge: 100,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect('Access-Control-Max-Age', '100')
        .expect(200, done);
    });
    it('allowHeaders', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
        allowHeaders: [ 'A', 'B' ],
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect('Access-Control-Allow-Headers', 'A, B')
        .expect(200, done);
    });
    it('allowMethods', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
        allowMethods: [ 'A', 'B' ],
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect('Access-Control-Allow-Methods', 'A, B')
        .expect(200, done);
    });
    it('headers', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
        headers: {
          'A': '12345',
          'B': '67890',
        },
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect('A', '12345')
        .expect('B', '67890')
        .expect(200, done);
    });
  });

});
