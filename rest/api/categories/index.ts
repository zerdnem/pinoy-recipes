import type { VercelRequest, VercelResponse } from '@vercel/node';

import categories from './categories'

export default (req: VercelRequest, res: VercelResponse) => {
    return res.json(categories);
  };
  