import {PrismaClient, Car as PrismaCar} from '@prisma/client';
import {CreateCarInput} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const carService = {
  getCars: async (): Promise<PrismaCar[]> => {
    const cars: PrismaCar[] = await prisma.car.findMany();
    return cars;
  },
  createCar: async (data: CreateCarInput): Promise<PrismaCar> => {
    const car = await prisma.car.create({data});
    return car;
  },
  getCar: async (id: number): Promise<PrismaCar | null> => {
    const car = await prisma.car.findUnique({where: {id}});
    return car;
  },
  updateCar: async (id: number, data: Partial<CreateCarInput>): Promise<PrismaCar | null> => {
    const car = await prisma.car.update({
      where: {id},
      data,
    });
    return car;
  },
  deleteCar: async (id: number): Promise<PrismaCar | null> => {
    const car = await prisma.car.delete({where: {id}});
    return car;
  },
};

export default carService;
