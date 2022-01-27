import httpMocks from 'node-mocks-http'
import { startServer, stopServer } from '../app';

// import { request } from 'supertest'

import axios, { AxiosInstance } from 'axios'

import * as http from 'http';

describe('Auth APIs', () => {
  let server: http.Server;
  let request: AxiosInstance;

  beforeAll(async () => {
    server = await startServer();
    request = axios.create({
      baseURL: 'http://localhost:5000/',
      validateStatus: null
    })
  })
  afterAll(async () => {
    stopServer(server)
  })

  describe('POST to /auth/login', () => {
    it('returns 201 and authrization token when user and password were valid ', async () => {
      const admin = {
        username: 'admin',
        password: '9191'
      };

      const res = await request.post('/auth/login', admin);

      expect(res.status).toBe(200);
      expect(res.data.token.length).toBeGreaterThan(0);
    })
    it('returns 201 and authrization token when user and password were not valid ', async () => {
      const admin = {
        username: 'wrongname',
        password: 'wrongps'
      };

      const res = await request.post('/auth/login', admin);

      expect(res.status).toBe(401);
      // console.log(res.data)
      ////      { message: 'Invalid user' }반환
      // expect(res.data.token.length).toBeGreaterThan(0);
    })
  })
})
