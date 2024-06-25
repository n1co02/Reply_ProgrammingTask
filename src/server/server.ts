import cors from 'cors';
import express from 'express';
import {get, type Server} from 'http';
import {OK} from '../constants';
import {json} from 'body-parser';
import startExpressApp from '../utility/startExpressApp';
import {setupSwagger} from '../utility/swaggerSetup';

//routes
import router from '../router/testRouter';
import processScootersRouter from '../router/processScooters';
import getUserRouter from '../router/getUsers';
import getCarsRouter from '../router/getCars';
import getDemandsRouter from '../router/getDemands';
import postCarRouter from '../router/postCar';
import postDemandRouter from '../router/postDemand';
import postUserRouter from '../router/postUser';

export async function startServer(
  port: number,
  // add params
): Promise<Server> {
  const app = express();
  app.use(cors());
  app.use(express.json());

  setupSwagger(app);

  app.use('/test', router);

  //manage service for RESTful APIs
  app.use('/getDemands', getDemandsRouter);
  app.use('/getCars', getCarsRouter);
  app.use('/postCar', postCarRouter);
  app.use('/postDemand', postDemandRouter);
  app.use('/postUser', postUserRouter);
  app.use('/getUser', getUserRouter);

  //task 1 process scooters
  app.use('/processScooters', processScootersRouter);

  app.get('/ping', (req, res) => {
    res.send({status: OK});
  });

  return startExpressApp(app, port);
}
