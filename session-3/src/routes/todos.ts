import { Router } from 'express';
import { getAllTodos, getOneTodos, putTodo, createTodos, deleteTodos} from '../controllers/todos'
const router = Router();

router.get('/', getAllTodos );
router.get('/:id', getOneTodos);
router.put('/:id', putTodo);
router.post('/', createTodos);
router.delete('/:id', deleteTodos);

export default router;