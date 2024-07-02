import {PrismaClient} from '@prisma/client';
import {UserInput, User} from '../../interfaces/interfaces';
const prisma = new PrismaClient();

const userService = {
  getUsers: async (): Promise<User[]> => prisma.user.findMany(),
  createUser: async (data: UserInput): Promise<User> => prisma.user.create({data}),
};

export default userService;
