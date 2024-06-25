import type {Router, Request, Response} from 'express';
import express from 'express';
import ServerError from '../utility/serverError';
import demandService from '../api-v1/services/demandService';

const getDemandsRouter: Router = express.Router();

getDemandsRouter.get('/', async (req, res) => {
  try {
    const demands = await demandService.getDemands();
    return res.json(demands);
  } catch (error) {
    throw new ServerError('INTERNAL_SERVER_ERROR', {info: 500});
  }
});
export default getDemandsRouter;
