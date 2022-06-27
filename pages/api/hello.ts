// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  name: string
}

//api key: 58c26fd4e3387706e85bdf6b
//example of fetching my current listings:

// /api/classifieds/listings/v1?token=58c26fd4e3387706e85bdf6b

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
  res.status(200).json({name: 'John Doe'});
}
