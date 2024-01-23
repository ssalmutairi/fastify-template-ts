import fp from "fastify-plugin";
import rateLimit, { FastifyRateLimitOptions } from "@fastify/rate-limit";

export default fp<FastifyRateLimitOptions>(async (fastify) => {
  fastify.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
  });
});
