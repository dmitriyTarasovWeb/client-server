import { Request, Response } from 'express';
import createUser from '../services/createUser';

import getUser, { UserDocument } from '../models/user';

import deleteUser from '../services/deleteUser';

const createUserController = (req, res) => {
  createUser(req.body, (err) => {
    if (!err) {
      res.status(200).json({ message: 'success' });
    } else {
      console.error('Error in create user: ', err);
      res.status(400).json({ message: 'failure' });
    }
  });
};

  const getUserController = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.params;
      const user: UserDocument | null = await getUser.findOne({ email });
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return; // Завершаем выполнение функции
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user by email:', error);
      res.status(500).json({ message: 'Error getting user by email', error: error.message });
    }
  };
  
const deleteUserController = (req, res) => {
  deleteUser(req.params.id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.status(200).json({ message: 'success' });
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    } else {
      res.status(400).json({ message: 'failure' });
    }
  });
};



export const addRoomToUserByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    const { roomId } = req.body;

    console.log('Received email:', email); // Логирование email
    console.log('Received roomId:', roomId); // Логирование roomId

    const user: UserDocument | null = await getUser.findOne({ email });
    console.log('Found user:', user); // Логирование найденного пользователя

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    user.rooms = roomId;
    await user.save();

    res.status(200).json({ message: 'Room added successfully', user });
  } catch (error) {
    console.error('Error adding room to user:', error); // Логирование ошибки
    res.status(500).json({ message: 'Error adding room to user', error: error.message });
  }
};


export {
  createUserController,
  getUserController,
  deleteUserController,
};
