import Link from "next/link";
import NotFound from "./NotFound";

export default function Recipes({ recipes }) {
  return (
    <div className="bg-gray-100">
      {recipes.length ? (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {recipes.map((recipe) => (
              <li key={recipe.id} className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt=""
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />
                  <Link
                    href={{
                      pathname: "/recipe/[slug]",
                      query: {
                        recipe_id: recipe.id,
                        slug: recipe.slug,
                      },
                    }}
                    as={`/recipe/${recipe.slug}`}
                    key={recipe.id}
                  >
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {recipe.title}
                      </span>
                    </button>
                  </Link>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {recipe.title}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  {recipe.cook_time}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
