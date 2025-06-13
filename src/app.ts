import { errors } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import appRouter from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

// Body Parser
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(appRouter);

app.use(errors()); // для ошибок celebrate (валидация)

app.use(errorHandler); // общий обработчик ошибок

app.listen(3000, () => {
  console.log('Start');
});
