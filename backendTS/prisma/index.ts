import { PrismaClient } from '../src/generated/prisma';
import { passwordHash } from './extensions/usuarios';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaBase =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });


if (process.env.NODE_ENV === 'development') {
  globalForPrisma.prisma = prismaBase;
}

const prisma = prismaBase.$extends(passwordHash)

export { prisma }