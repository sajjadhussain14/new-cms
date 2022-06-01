/**
 * multiple-cors-domain type
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import * as express from 'express';

interface Options {
  // a list of domains
  domain?: string[];
  // allow any domain
  any?: boolean;
  // additional headers
  headers?: {
    [key: string]: string;
  };
  maxAge?: number;
  credentials?: boolean;
  allowHeaders?: string[];
  allowMethods?: string[];
}

/**
 * Returns multiple-cors-domain middleware
 */
declare function multipleCORSDomain(options: Options): express.RequestHandler;

export = multipleCORSDomain;
