import type { VercelRequest, VercelResponse } from '@vercel/node';

import recipes from './recipes'

export default (req: VercelRequest, res: VercelResponse) => {
    return res.json(recipes);
  };
  