import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi, { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
export default fp<FastifySwaggerUiOptions>(async (fastify) => {
  fastify.register(swagger);
  fastify.register(swaggerUi, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
    uiHooks: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onRequest: function (request, reply, next) {
        next();
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
});
