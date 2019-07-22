import { prisma } from "../../../../generated/prisma-client";

 export default {
  Query: {
    searchPost: async (_, args) => {

      console.log('args : ' + JSON.stringify(args));

      return prisma.posts({
        where: {
          OR: [
            { location_starts_with: args.term },
            { caption_starts_with: args.term }
          ]
        }
      });
    }
  }
};