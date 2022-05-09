import prisma from '../../src/database/Connection';

async function seedUsersTable() {
  const user1 = await prisma.users.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Jhon Doe',
      email: 'jhondoe@email.com',
      password: '$2a$10$hivelJBMidKzG4r1NTase.c08xjzEjEf2eUXsiGQFnxd83ZWIU.eO', //secret_password
      role: 'user'
    }
  });

  const user2 = await prisma.users.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Henrique Silva',
      email: 'silvahenrique@email.com',
      password: '$2a$12$GTlJdM8tGJs8eAyOFtQADeem7VqeYZRh6hjwQPGwIGJWKHxdNcccO', //secret_silva
      role: 'admin'
    }
  });

  const user3 = await prisma.users.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Carol Santos',
      email: 'santos@email.com',
      password: '$2a$12$5gMrz9SWw10ZUySxWXvw9OpdPOB6skZTcczotOGbn9hvrpvkFtV82', //santos_password
      role: 'user'
    }
  });
}

export default seedUsersTable;
