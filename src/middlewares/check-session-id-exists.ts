import { FastifyReply } from 'fastify'
import { FastifyRequest } from 'fastify/types/request'

export async function checkSessionIdExists(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
