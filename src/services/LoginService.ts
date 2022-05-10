import prisma from '../database/Connection';
import * as bcrypt from 'bcrypt';
import jwtGenerator from '../helpers/jwtGenerator';

async function createLogin(name: string, email: string, password: string) {
  const userExist = await prisma.users.findFirst({
    where: { email }
  })

  if (userExist) return null;

  const SALT_ROUNDS = 10;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

  const create = await prisma.users.create({
    data: {
      name, email, password: passwordHash, role: 'user', coins: 0
    }
  })

  if (!create) return null;

  const token = jwtGenerator({ name, role: create.role, coins: create.coins })

  return { token, role: create.role, coins: create.coins };
}

export default { createLogin };
