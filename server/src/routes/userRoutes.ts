import express from 'express';
import {
  createUserController,
  getUserController,
  deleteUserController,
  addRoomToUserByEmail
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUserController);
router.get('/email/:email', getUserController);
router.delete('/:id', deleteUserController);

router.post('/email/:email/rooms', addRoomToUserByEmail);

export default router;