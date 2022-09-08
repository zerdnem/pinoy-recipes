
import type { VercelRequest, VercelResponse } from '@vercel/node';
import categories from './categories'


export default (req: VercelRequest, res: VercelResponse) => {
  const { id } = req.query;
  const [category] = categories.categories.filter((e) => e.id === Number(id))
  res.status(200).json(category ? category : {});
};
