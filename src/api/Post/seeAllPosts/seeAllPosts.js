import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllPosts: async (_, args) => {

    const allPosts = await prisma.posts();

    console.log(`seeAllPost.js | allPosts : ${JSON.stringify(allPosts, null, 2)}`);

      return allPosts;
    }
  }
};