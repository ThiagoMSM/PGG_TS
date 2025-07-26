import { prisma } from '../../../prisma/index';

export const buscarUsuarioPorId = async ({ id }: { id: number }) => {
  const usuario = await prisma.usuarios.findUnique({
    where: { id },
    omit: {senha: true}
  });

  return usuario;
};