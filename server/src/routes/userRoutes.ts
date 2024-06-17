import express from 'express';
import {
  createUserController,
  getUserController,
  deleteUserController,
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUserController);
router.get('/:id', getUserController);
router.delete('/:id', deleteUserController);

export default router;