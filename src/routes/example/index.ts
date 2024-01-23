import { FastifyPluginAsync } from "fastify"

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })


  // create post example
  fastify.route({
    method: 'POST',
    url: '/',
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' }
        }
      }
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {

      // const { name, age } = request.body
      // return { name, age }
    }
  })




}

export default example;
