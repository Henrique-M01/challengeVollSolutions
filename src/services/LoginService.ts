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

  return { role: create.role, coins: create.coins };
}

async function loginValidate(email: string, password: string) {
  const dataDb = await prisma.users.findFirst({ where: { email }});

  if (!dataDb) return null;

  const passwordDb = dataDb.password;

  const verifyPassword = await bcrypt.compare(password, passwordDb);

  if (!verifyPassword) return null;

  const token = jwtGenerator({ name: dataDb.name, role: dataDb.role, coins: dataDb.coins })

  return { token, name: dataDb.name, role: dataDb.role, coins: dataDb.coins }
}

export default { createLogin, loginValidate };
