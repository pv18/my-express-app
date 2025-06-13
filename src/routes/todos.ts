import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todos';
import { hasValidId } from '../middlewares/has-valid-id';

const router = Router();

router.get('/', getAllTodos);

router.get('/:id', [hasValidId], getTodoById);

router.post('/', createTodo);

router.put('/:id', [hasValidId], updateTodo);

router.delete('/:id', [hasValidId], deleteTodo);

export default router;
