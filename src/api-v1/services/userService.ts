import {PrismaClient} from '@prisma/client';
import {UserInput} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const userService = {
  getUsers: async () => prisma.user.findMany(),
  createUser: async (data: UserInput) => prisma.user.create({data}),
};

export default userService;
