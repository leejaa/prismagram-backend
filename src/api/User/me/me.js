import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;

      console.log(`me.js | user : ${JSON.stringify(user, null, 2)}`);

      const userProfile = await prisma.user({ id: user.id });

      console.log(`me.js | userProfile : ${JSON.stringify(userProfile, null, 2)}`);

      const posts = await prisma.user({ id: user.id }).posts();

      return userProfile;
    }
  }
};