import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client';

const secret: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: 'protected'
    });
  } else {
    res.send({
      error: 'not protected'
    });
  }
};

export default secret;
