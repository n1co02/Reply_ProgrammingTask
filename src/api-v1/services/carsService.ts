import {PrismaClient, Car as PrismaCar} from '@prisma/client';
const prisma = new PrismaClient();

const carsService = {
  getCars: async (): Promise<PrismaCar[]> => {
    const cars: PrismaCar[] = await prisma.car.findMany();
    return cars;
  },
};

export default carsService;
