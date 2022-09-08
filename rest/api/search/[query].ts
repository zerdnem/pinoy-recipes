
import type { VercelRequest, VercelResponse } from '@vercel/node';
import recipes from '../recipes/recipes'


export default (req: VercelRequest, res: VercelResponse) => {
  const { query } = req.query;
  const recipe = recipes.recipes.filter((e) => e.title.toLowerCase().match(String(query)))
  res.status(200).json(recipe.length ? recipe : []);
};
