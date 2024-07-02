import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import demandService from '../api-v1/services/demandService';
import {CreateDemandInput} from '../interfaces/interfaces';
const postDemandRouter: Router = express.Router();

postDemandRouter.post('/', async (req, res) => {
  const {user_id, pickupLocation, dropoffLocation, time, passengers} = req.body;
  try {
    if (!user_id || !pickupLocation || !dropoffLocation || !time || !passengers)
      return res.status(400).json({error: 'All fields are required'});

    const demand: CreateDemandInput = {
      user_id,
      pickupLocation,
      car_id,
      dropoffLocation,
      time: new Date(time),
      passengers,
    };
    const createdDemand = await demandService.createDemand(demand);

    return res.json(createdDemand);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default postDemandRouter;
