/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from "@heroicons/react/solid";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoriesNav({ categories }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6 mx-8 ">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Popular Recipes
        </h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <li
              key={category.name}
              className="col-span-1 flex shadow-sm rounded-md"
            >
              <div
                className={classNames(
                  "flex-shrink-0  bg-gray-600 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                )}
              >
                BR
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <Link
                    href={{
                      pathname: "/category/[slug]",
                      query: {
                        category_id: category.id,
                        slug: category.slug,
                      },
                    }}
                    // as={`/category/${category.slug}`}
                    key={category.id}
                  >
                    <a className="text-gray-900 font-medium hover:text-gray-600">
                      {category.name}
                    </a>
                  </Link>
                  <p className="text-gray-500">{category.count} Recipes</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
