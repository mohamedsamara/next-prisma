import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id }
  } = req;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id)
    },
    include: { author: true }
  });

  res.status(200).json({
    post,
    success: true
  });
}
