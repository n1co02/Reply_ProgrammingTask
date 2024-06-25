import {PrismaClient} from '@prisma/client';
import {Car, CreateCarInput} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const carService = {
  getCars: async (): Promise<Car[]> => {
    return prisma.car.findMany();
  },
  createCar: async (data: CreateCarInput): Promise<Car> => {
    return prisma.car.create({data});
  },
};

export default carService;
