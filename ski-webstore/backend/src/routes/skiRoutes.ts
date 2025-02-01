import { Router } from 'express';
import { getAllSkis, getSkiById } from '../controllers/skiController';

const router = Router();

router.get('/', getAllSkis);
router.get('/:id', getSkiById);

export default router;