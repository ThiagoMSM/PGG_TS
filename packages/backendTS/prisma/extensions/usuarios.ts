import { Prisma } from '../../src/generated/prisma';
import bcrypt from 'bcryptjs'

export const passwordHash = Prisma.defineExtension({
  name: 'password-hash',
  query: {
    usuarios: {
      async create({ args, query }) {
        if (args.data.senha) {
          const hash = await bcrypt.hash(args.data.senha, 10);
          args.data.senha = hash;
        }
        return query(args);
      }
    }
  },
});
