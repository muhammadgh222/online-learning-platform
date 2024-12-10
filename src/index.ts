import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata'; // Necessary for TypeORM

import { DataSource } from 'typeorm';
import * as config from '../ormconfig.json';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

const dataSource = new DataSource(config as any);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
