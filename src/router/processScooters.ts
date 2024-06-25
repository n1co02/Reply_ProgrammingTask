import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import {processScooters} from '../components/processComponent';
import {saveData} from '../components/dataComponent';
const processScootersRouter: Router = express.Router();

processScootersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const updatedData = processScooters();
    saveData(updatedData);
    return res.send(updatedData);
  } catch (e) {
    throw new ServerError('SCOOTERS_NOT_FOUND', {info: 404});
  }
});

export default processScootersRouter;
