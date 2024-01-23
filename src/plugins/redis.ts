import fp from "fastify-plugin";
import fastifyRedis, { FastifyRedisPluginOptions } from "@fastify/redis";

export default fp<FastifyRedisPluginOptions>(async (fastify) => {
  // enable redis plugin
  if (process.env.REDIS_ENABLED === "true") {
    fastify.register(fastifyRedis, {
      host: process.env.REDIS_HOST || "127.0.0.1",
      username: process.env.REDIS_USERNAME || "",
      password: process.env.REDIS_PASSWORD || "",
      port: parseInt(process.env.REDIS_PORT || "") || 6379, // Redis port
      family: 4, // 4 (IPv4) or 6 (IPv6)
    });
  }
});
