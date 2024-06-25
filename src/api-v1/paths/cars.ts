import {Operation} from 'express-openapi';
import carService from '../services/carService';
//for testing api specification
export const GET: Operation = async (req, res) => {
  const cars = await carService.getCars();
  res.status(200).json(cars);
};

export const POST: Operation = async (req, res) => {
  const {engineType, availableSeats, locationType, locationCoordinates, status} = req.body;
  const car = await carService.createCar({
    engineType,
    availableSeats,
    locationType,
    locationCoordinates,
    status,
  });
  res.status(201).json(car);
};

GET.apiDoc = {
  summary: 'Get all cars',
  operationId: 'getCars',
  responses: {
    '200': {
      description: 'A list of cars',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Car',
            },
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
