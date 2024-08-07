import {Operation} from 'express-openapi';
import carService from '../services/carService';
import {CarStatusCheck, EngineTypeCheck} from '../../utility/carCheck';

export const GET: Operation = async (req, res) => {
  const car = await carService.getCar(Number(req.params.id));
  return res.status(201).json(car);
};

export const POST: Operation = async (req, res) => {
  const {engineType, availableSeats, locationType, locationCoordinates, status} = req.body;
  CarStatusCheck(status);
  EngineTypeCheck(engineType);
  const car = await carService.createCar({
    engineType,
    availableSeats,
    locationType,
    locationCoordinates,
    status,
  });
  return res.status(201).json(car);
};

export const PUT: Operation = async (req, res) => {
  const id = Number(req.params.id);
  const {engineType, availableSeats, locationType, locationCoordinates, status} = req.body;

  CarStatusCheck(status);
  EngineTypeCheck(engineType);
  const car = await carService.updateCar(id, {
    engineType,
    availableSeats,
    locationType,
    locationCoordinates,
    status,
  });

  return car ? res.status(200).json(car) : res.status(404).json({error: 'Car not found'});
};

export const DELETE: Operation = async (req, res) => {
  const id = Number(req.params.id);
  const car = await carService.deleteCar(id);
  return car ? res.status(200).json(car) : res.status(404).json({error: 'Car not found'});
};

GET.apiDoc = {
  summary: 'Get a car by id',
  operationId: 'getCar',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer',
      },
    },
  ],
  responses: {
    '200': {
      description: 'A car',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Car',
          },
        },
      },
    },
  },
};
POST.apiDoc = {
  summary: 'Create a new car',
  operationId: 'createCar',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CreateCarInput',
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'Car created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Car',
          },
        },
      },
    },
  },
};
PUT.apiDoc = {
  summary: 'Update an existing car',
  operationId: 'updateCar',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CreateCarInput',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'Car updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Car',
          },
        },
      },
    },
    '404': {
      description: 'Car not found',
    },
  },
};
DELETE.apiDoc = {
  summary: 'Delete an existing car',
  operationId: 'deleteCar',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer',
      },
    },
  ],
  responses: {
    '200': {
      description: 'Car deleted',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Car',
          },
        },
      },
    },
    '404': {
      description: 'Car not found',
    },
  },
};
