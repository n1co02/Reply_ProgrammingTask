// swaggerSetup.ts
import {initialize} from 'express-openapi';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import swaggerUi from 'swagger-ui-express';
import {Express, RequestHandler} from 'express';

// services
import userService from '../api-v1/services/userService';
import demandService from '../api-v1/services/demandService';
import carService from '../api-v1/services/carService';
import * as carsPath from '../api-v1/paths/cars';
import * as usersPath from '../api-v1/paths/users';
import * as demandsPath from '../api-v1/paths/demands';
const v1ApiDocPath = path.join(__dirname, '../api-v1/api-doc.yml');
const v1ApiDoc = yaml.load(fs.readFileSync(v1ApiDocPath, 'utf8')) as any;

export function setupSwagger(app: Express): void {
  initialize({
    app,
    apiDoc: v1ApiDoc,
    dependencies: {
      userService,
      demandService,
      carService,
    },
    paths: path.join(__dirname, '../api-v1/paths'),
    docsPath: '/api-docs',
  });
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(v1ApiDoc));
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(v1ApiDoc));
  });

  app.post('/api/cars', carsPath.POST as RequestHandler);
  app.get('/api/cars', carsPath.GET as RequestHandler);
  app.get('/api/cars/:id', carsPath.GET_CAR as RequestHandler);
  app.post('/api/users', usersPath.POST as RequestHandler);
  app.get('/api/users', usersPath.GET as RequestHandler);
  app.get('/api/demands', demandsPath.GET as RequestHandler);
  app.post('/api/demands', demandsPath.POST as RequestHandler);
  app.put('/api/cars/:id', carsPath.PUT as RequestHandler);
  app.delete('/api/cars/:id', carsPath.DELETE as RequestHandler);
}
