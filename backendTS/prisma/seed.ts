import { prisma } from './index';
import bcrypt from 'bcryptjs';
import categorias from '../src/seeds/categorias.json'
import usuarios from '../src/seeds/usuarios.json'
import notasfiscais from '../src/seeds/notasfiscais.json'

async function main() {
  
  for (const categoria of categorias) {
    await prisma.categorias.create({ data: categoria });
  }
  
  for (const usuario of usuarios) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(usuario.senha, salt);
    await prisma.usuarios.create({
      data: {
        ...usuario,
        senha: hash
      }
    })
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