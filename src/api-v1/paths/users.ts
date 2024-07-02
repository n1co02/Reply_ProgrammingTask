import {Operation} from 'express-openapi';
import userService from '../services/userService';
//for testing api specification

export const GET: Operation = async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

export const POST: Operation = async (req, res) => {
  const {name, address, age} = req.body;
  const user = await userService.createUser({
    name,
    address,
    age,
  });
  return res.status(201).json(user);
};

GET.apiDoc = {
  summary: 'Get all users',
  operationId: 'getUsers',
  responses: {
    '200': {
      description: 'A list of users',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
  },
};

POST.apiDoc = {
  summary: 'Create a new user',
  operationId: 'createUser',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CreateUserInput',
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'User created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
  },
};
