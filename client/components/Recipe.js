import { HeartIcon } from "@heroicons/react/outline";
export default function Recipe({ recipe }) {
  return (
    <div>
      <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
        <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <HeartIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-5">
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                {recipe.title}
              </h2>

              <section aria-labelledby="information-heading" className="mt-3">
                <h3 id="information-heading" className="sr-only">
                  Recipe information
                </h3>

                <div className="mt-6">
                  <h4 className="sr-only">Description</h4>

                  <p className="text-sm text-gray-700">{recipe.description}</p>
                </div>
                <div className="mt-6">
                  <h4 className="sr-only">Prep time</h4>

                  <p className="text-sm text-gray-700">{recipe.prep_time}</p>
                </div>
                <div className="mt-6">
                  <h4 className="sr-only">Cook time</h4>

                  <p className="text-sm text-gray-700">{recipe.cook_time}</p>
                </div>
                <div className="mt-6">
                  <h4 className="sr-only">Total time</h4>

                  <p className="text-sm text-gray-700">{recipe.total_time}</p>
                </div>
                <div className="mt-6">
                  <h4 className="sr-only">Servings</h4>

                  <p className="text-sm text-gray-700">{recipe.servings}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">Ingredients</h2>

            <div className="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                {recipe.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">Nutritions</h2>

            <div className="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                {recipe.nutritions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">Instructions</h2>

            <div className="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                {recipe.instructions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
