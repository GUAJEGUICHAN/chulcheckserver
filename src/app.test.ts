import { ErrorRequestHandler } from 'express';
import { startServer, stopServer } from './app';

import axios, { AxiosInstance } from 'axios'

import * as http from 'http';

describe('app', () => {
  let server: http.Server;
  let request: AxiosInstance;

  beforeEach(async () => {
    server = await startServer();
    request = axios.create({
      baseURL: 'http://localhost:5000/',
      validateStatus: null
    })
  })

  afterEach(async () => {
    stopServer(server)
  })

  describe('GET to /', () => {
    it('returns Hello World', async () => {
      const res = await request.get('/');

      expect(res.data).toBe('Hello World')
    })
  })

  describe('GET to /wrong', () => {
    it('returns  states 404', async () => {
      const res = await request.get('/wrong');

      expect(res.status).toBe(404)
    })
  })

});
