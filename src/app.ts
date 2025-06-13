import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import appRouter from './routes';
import { errorHandler } from './middlewares/error-handler';
import { customCors } from './middlewares/custom-cors';

const app = express();

app.use(customCors); // Кастомный cors
app.use(
  cors({
    origin: 'https://www.w3.org', // Для продакшена можно добавить массив доменов, с которых можно делать запросы к API
  })
); // Реализация cors через библиотеку cors (для разработки можно не настраивать)

// Body Parser
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(appRouter);

app.use(errors()); // для ошибок celebrate (валидация)

app.use(errorHandler); // общий обработчик ошибок

app.listen(3000, () => {
  console.log('Start');
});
