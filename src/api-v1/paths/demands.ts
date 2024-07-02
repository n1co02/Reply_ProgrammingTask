import {Operation} from 'express-openapi';
import demandService from '../services/demandService';
import {CreateDemandInput} from '../../interfaces/interfaces';

// for testing api specification

export const GET: Operation = async (req, res) => {
  const demands = await demandService.getDemands();
  return res.status(200).json(demands);
};

export const POST: Operation = async (req, res) => {
  const {user_id, pickupLocation, dropoffLocation, time, passengers, car_id} = req.body;
  if (!user_id || !pickupLocation || !dropoffLocation || !time || !passengers || !car_id) {
    throw new Error('Missing required fields');
  }
  const demand: CreateDemandInput = await demandService.createDemand({
    user_id,
    pickupLocation,
    dropoffLocation,
    time: new Date(time),
    passengers,
    car_id,
  });
  return res.status(201).json(demand);
};

GET.apiDoc = {
  summary: 'Get all demands',
  operationId: 'getDemands',
  responses: {
    '200': {
      description: 'A list of demands',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Demand',
            },
          },
        },
      },
    },
  },
};

POST.apiDoc = {
  summary: 'Create a new demand',
  operationId: 'createDemand',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CreateDemandInput',
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'Demand created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Demand',
          },
        },
      },
    },
  },
};
