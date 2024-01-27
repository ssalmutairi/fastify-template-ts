import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { schema, ServiceSchema } from "./schema";

const plugin: FastifyPluginAsyncTypebox = async (fastify): Promise<void> => {
  // create get template
  fastify.route<ServiceSchema>({
    method: "GET",
    url: "/",
    schema: schema,
    // preHandler: [fastify.authenticate],
    handler: async (request) => {
      const { } = request;

      return "this is a template";
    },
  });
};

export default plugin;
