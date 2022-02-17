import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import allMembers from './data/allMembers';

const corsOption = {
  origin: 'http://localhost:9000',
  optionsSuccessStatus: 200,
};

export async function startServer() {
  // console.log('서버 시작?');
  const app = express();

  app.use(express.json());
  app.use(cors(corsOption));
  app.use(helmet());

  app.use('/login', (req, res) => {
    // res.send('ACCESS_TOKEN')
    res.json({ accessToken: 'ACCESS_TOKEN' });
  });

  app.use('/grade', (req, res) => {
    res.json({
      grade: [1, 2, 3],
    });
  });
  app.use('/class', (req, res) => {
    res.json({
      class: {
        1: [1, 2, 3, 4, 5, 6, 7],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4],
      },
    });
  });

  app.use('/members', (req, res) => {
    res.json({
      members: allMembers,
    });
  });

  const server = app.listen(5000);

  return server;
}

export async function stopServer(server) {
  return new Promise(() => {
    server.close();
  });
}
