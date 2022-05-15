import prisma from '../database/Connection';

async function getAllUsers() {
  const allUsers = await prisma.users.findMany()

  if (!allUsers) return null;

  const usersWithoutPassword = allUsers.map((user) => {
    return { id: user.id, name: user.name, email: user.email, role: user.role, coins: user.coins }
  })

  return usersWithoutPassword;
}

export default { getAllUsers };
