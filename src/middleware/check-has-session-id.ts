import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkHasSessionId(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return reply.status(401).send({ error: 'Unauthorized.' })
  }
}
