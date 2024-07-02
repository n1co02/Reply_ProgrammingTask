import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import carService from '../api-v1/services/carService';
import {CreateCarInput} from '../interfaces/interfaces';
const postCarRouter: Router = express.Router();

postCarRouter.post('/', async (req, res) => {
  const {engineType, availableSeats, locationType, locationCoordinates, status} = req.body;
  try {
    const car: CreateCarInput = {
      engineType,
      availableSeats,
      locationType,
      locationCoordinates,
      status,
    };
    const createdCar = await carService.createCar(car);
    return res.json(createdCar);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default postCarRouter;
