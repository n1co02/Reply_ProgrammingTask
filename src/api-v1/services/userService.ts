import {PrismaClient, User as PrismaUser} from '@prisma/client';
import {UserInput} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const userService = {
  getUsers: async (): Promise<PrismaUser[]> => prisma.user.findMany(),
  createUser: async (data: UserInput): Promise<PrismaUser> => prisma.user.create({data}),
};

export default userService;
