import { prisma } from "../../../../generated/prisma-client";

 export default {
  Query: {
    searchUser: async (_, args) => {

      console.log('args : ' + JSON.stringify(args));

      return prisma.users({
        where: {
          OR: [
            { name_contains: args.term },
            { firstName_contains: args.term },
            { lastName_contains: args.term }
          ]
        }
      })
    }
  }
};