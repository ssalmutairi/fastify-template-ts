import "@fastify/jwt"


declare module "@fastify/jwt" {
    interface FastifyJWT {
        user: {
            id: number,
            name: string,
            age: number,
            permissions: string[],
        } // user type is return type of `request.user` object
    }
}

