import express from 'express';
import path from 'path';

// import todosRouter from './routes/todos';
import appRouter from './routes';

const app = express();

// Body Parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(appRouter);
// app.use('/todos', todosRouter);

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>Nothing found!');
// });

app.listen(3000, () => {
  console.log('Start');
});
