import express, {
  Application, Request, Response,
} from 'express';

import * as http from 'http';

import cors from 'cors';

import helmet from 'helmet';

import { AuthController } from './contoroller/auth';

import * as adminRepository from './data/auth'
import authRouter from './router/auth';

export async function startServer() {

  const app: Application = express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
    // res.json({
    //   id: 'qwer',
    //   ps: 'qwer'
    // })
  });

  app.use('/auth', authRouter(new AuthController(adminRepository)));

  app.use((req: Request, res: Response) => {
    res.sendStatus(404);
  });

  const server: http.Server = app.listen(5000, () => console.log('server running'));

  return server

}
export async function stopServer(server: http.Server) {
  return new Promise((resolve, reject) => {
    server.close()
  })
}

