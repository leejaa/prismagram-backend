import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

 export default {
  Mutation: {
    addComment: async (_, args, { request }) => {
      isAuthenticated(request);
      const { text, postId } = args;

      console.log(`postId : ${postId}`);
      console.log(`text : ${text}`);

      const { user } = request;
      const comment = await prisma.createComment({
        user: {
          connect: {
            id: user.id
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        text
      });
      return comment;
    }
  }
};