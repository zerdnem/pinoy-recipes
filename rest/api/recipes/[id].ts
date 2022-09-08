
import type { VercelRequest, VercelResponse } from '@vercel/node';
import recipes from './recipes'


export default (req: VercelRequest, res: VercelResponse) => {
  const { id } = req.query;
  const [recipe] = recipes.recipes.filter((e) => e.id === Number(id))
  res.status(200).json(recipe ? recipe : {});
};
