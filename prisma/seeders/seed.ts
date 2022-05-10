import prisma from '../../src/database/Connection'
import seedProductsTable from './seedProductsTable';
import seedUsersTable from './seedUsersTables';

seedUsersTable()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

seedProductsTable()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
