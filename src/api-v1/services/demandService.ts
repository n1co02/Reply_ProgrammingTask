import {PrismaClient} from '@prisma/client';
import {CreateDemandInput, Demand} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const demandService = {
  getDemands: async (): Promise<Demand[]> => {
    return prisma.demand.findMany();
  },
  createDemand: async (data: CreateDemandInput): Promise<Demand> => {
    return prisma.demand.create({data});
  },
};

export default demandService;
