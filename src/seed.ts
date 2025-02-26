import { PrismaClient } from "@prisma/client";
import { createEvents } from './db/createEvents';
import { createParticipants } from "./db/createPaticipants";

const prisma = new PrismaClient();
async function main() {
    await createEvents();
    await createParticipants();
  }
  
  main()

  