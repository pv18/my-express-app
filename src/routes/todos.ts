import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todos';
import { validateParamId } from '../validators/params';
import {
  validateTodoBody,
  validateUpdateTodoParams,
} from '../validators/todos';

const router = Router();

router.get('/', getAllTodos);

router.get('/:id', validateParamId, getTodoById);

router.post('/', validateTodoBody, createTodo);

router.put('/:id', [validateParamId, validateUpdateTodoParams], updateTodo);

router.delete('/:id', validateParamId, deleteTodo);

export default router;
