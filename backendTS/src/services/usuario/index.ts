import { prisma } from '../../../prisma/index';
import { loginBody } from '../../types/index';
import bcrypt from 'bcryptjs';
import CredenciaisInvalidasError from '../errors/usuario/credenciaisInvalidas';
import { usuarios } from '../../generated/prisma';
import { usuarioFrontEnd } from '../../types/index';

export const buscarUsuarioPorId = async ({ id }: { id: number }):Promise<usuarioFrontEnd | null> => {
  const usuario = await prisma.usuarios.findUnique({
    where: { id },
    select: {id: true, nome: true, email: true}
  });
  
  return usuario;
};

type usuarioClean = Omit<usuarios, "grupoacesso">;
export function buscarUsuarioPorEmail(params: { email: string; omitsenha: true }): Promise<usuarioFrontEnd | null>;
export function buscarUsuarioPorEmail(params: { email: string; omitsenha: false }): Promise<usuarioClean | null>;
export function buscarUsuarioPorEmail(params: { email: string; omitsenha?: boolean }): Promise<usuarioClean | usuarioFrontEnd | null>;
export async function buscarUsuarioPorEmail({ email, omitsenha = true }: { email: string; omitsenha?: boolean }) {
  const usuario = await prisma.usuarios.findUnique({
    where: { email },
    select: {id: true, nome: true, email: true, senha: !omitsenha}
  });

  return usuario;
};

export const login = async ({ email, senha }: loginBody):Promise<usuarioFrontEnd> => {
  const usuario = await buscarUsuarioPorEmail({ email: email, omitsenha: false })

  const dummyHash = '$2a$10$7EqJtq98hPqEX7fNZaFWoOaJ8psU2f6ZlZnXwPGu91hF18xv8bK6a';
  const passwordHash = usuario?.senha ?? dummyHash;

  const loginValido = await bcrypt.compare(senha, passwordHash);

  if (!usuario || !loginValido)
    throw new CredenciaisInvalidasError();

  const { senha: _, ...usuarioSemSenha } = usuario
  return usuarioSemSenha
}