import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import userService from '../api-v1/services/userService';
import {UserInput} from '../interfaces/interfaces';

const postUserRouter: Router = express.Router();

postUserRouter.post('/', async (req, res) => {
  const {name, address, age} = req.body;
  if (!name || !address || !age) return res.status(400).json({error: 'All fields are required'});
  try {
    const user: UserInput = {
      name,
      address,
      age,
    };
    const createdUser = await userService.createUser(user);
    return res.json(createdUser);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default postUserRouter;
