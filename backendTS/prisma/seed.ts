import { prisma } from './index';
import categorias from '../src/seeds/categorias.json'

async function main() {
  for (const categoria of categorias) {
    await prisma.categorias.create({ data: categoria });
  }
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });