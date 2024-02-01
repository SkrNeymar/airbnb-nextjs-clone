import { PrismaClient } from "@prisma/client"

// Prevent multiple instances of Prisma Client in NextJs hot reload
if (!global.prisma) {
  global.prisma = new PrismaClient()
}

const client = global.prisma

export default client
