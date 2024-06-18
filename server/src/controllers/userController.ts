import { Request, Response } from 'express';
import createUser from '../services/createUser';
import getUser from '../services/getUser';
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

const getUserController = (req, res) => {
  getUser(req.params.id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    } else {
      res.status(400).json({ message: 'failure' });
    }
  });
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

export {
  createUserController,
  getUserController,
  deleteUserController,
};
