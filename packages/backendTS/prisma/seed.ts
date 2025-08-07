import { prisma } from './index';
import categorias from '../src/seeds/categorias.json'
import usuarios from '../src/seeds/usuarios.json'
import {notasfiscais} from '../src/seeds/notasfiscais'
import { fornecedores } from '../src/seeds/fornecedores';
import produtos from '../src/seeds/produtos.json'
import {lotes} from '../src/seeds/lotes'
import { movimentos } from '../src/seeds/movimentos'

async function main() {
  for (const categoria of categorias) { // tabela se auto relaciona, createMany impossibilitaria o auto relacionamento... por isso, loop
    await prisma.categorias.create({ data: categoria });
  }

  for (const usuario of usuarios) {  // middleware/extension passwordhash (usuarios.ts) não rodaria em createMany... por isso, loop
    await prisma.usuarios.create({ data: usuario })
  }

  await prisma.notasfiscais.createMany({ data: notasfiscais });
  await prisma.fornecedores.createMany({ data: fornecedores });
  await prisma.produtos.createMany({ data: produtos });
  await prisma.lotes.createMany({ data: lotes });
  await prisma.movimentos.createMany({ data: movimentos });
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });