import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const userService = {
  getUsers: async () => prisma.user.findMany(),
  createUser: async (data: any) => prisma.user.create({data}),
};

export default userService;
