import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import userService from '../api-v1/services/userService';

const getUserRouter: Router = express.Router();

getUserRouter.get('/', async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.json(users);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default getUserRouter;
