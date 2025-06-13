import express from 'express';
import path from 'path';
import { errors } from 'celebrate';

// import todosRouter from './routes/todos';
import appRouter from './routes';

const app = express();

// Body Parser
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(appRouter);

app.use(errors());

app.listen(3000, () => {
  console.log('Start');
});
