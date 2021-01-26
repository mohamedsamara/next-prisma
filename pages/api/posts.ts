import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';

const prisma = new PrismaClient();

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  switch (req.method) {
    case 'GET':
      const posts = await prisma.post.findMany({
        include: { author: true }
      });
      res.status(200).json(posts);
      break;
    case 'POST':
      const { title, content } = req.body;
      const { user } = session;

      const post = await prisma.post.create({
        data: {
          title,
          content,
          author: { connect: { id: user.id } }
        }
      });

      res.status(200).json(post);

      break;
    default:
      res.status(405).end();
      break;
  }
}
