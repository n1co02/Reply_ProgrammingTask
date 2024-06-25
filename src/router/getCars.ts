import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import carService from '../api-v1/services/carService';

const getCarsRouter: Router = express.Router();

getCarsRouter.get('/', async (req, res) => {
  try {
    const cars = await carService.getCars();
    return res.json(cars);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default getCarsRouter;
