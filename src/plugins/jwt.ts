import fp from "fastify-plugin";
import fastifyJwt, { FastifyJWTOptions } from "@fastify/jwt";

export default fp<FastifyJWTOptions>(async (fastify) => {
  fastify.register(fastifyJwt, {
    secret: "supersecret",
  });

  fastify.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}
