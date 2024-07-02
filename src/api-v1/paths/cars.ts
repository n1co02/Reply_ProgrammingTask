import {Operation} from 'express-openapi';
import carService from '../services/carsService';
import {CarStatus} from '../../interfaces/enums';
//for testing api specification
export const GET: Operation = async (req, res) => {
  const cars = await carService.getCars();
  return res.status(200).json(cars);
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
