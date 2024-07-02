import {PrismaClient, Demand as PrismaDemand} from '@prisma/client';
import {CreateDemandInput} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const demandService = {
  getDemands: async (): Promise<PrismaDemand[]> => {
    return prisma.demand.findMany();
  },
  createDemand: async (data: CreateDemandInput): Promise<PrismaDemand> => {
    return prisma.demand.create({data});
  },
};

export default demandService;
