import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import userService from '../api-v1/services/userService';

const postUserRouter: Router = express.Router();

postUserRouter.get('/', async (req, res) => {
  const {name, address, age} = req.body;
  try {
    const user = await userService.createUser({
      name,
      address,
      age,
    });
    return res.json(user);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default postUserRouter;
