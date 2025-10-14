import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Example: Create initial users
  await prisma.user.createMany({
    data: [
      {
        email: "varunarajapaksha@gmail.com",
        name: "varuna@gmail.com",
        password:
          "$2a$12$1oecvbY0FPBkm/SdyFChJODaYaR0udNqgwYQg1KItcU75ZGYq2T4y", // always hash passwords
        isAdmin: true,
      },
      {
        email: "admin@example.com",
        name: "Admin",
        password:
          "$2a$12$1oecvbY0FPBkm/SdyFChJODaYaR0udNqgwYQg1KItcU75ZGYq2T4y", // always hash passwords
        isAdmin: true,
      },
      {
        email: "user@example.com",
        name: "User",
        password:
          "$2a$12$1oecvbY0FPBkm/SdyFChJODaYaR0udNqgwYQg1KItcU75ZGYq2T4y",
        isAdmin: false,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed finished.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
