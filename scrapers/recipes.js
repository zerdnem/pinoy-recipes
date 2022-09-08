import { writeFile } from "fs";
import wpapi from "wpapi";
import parse from "./scraper.js";
import { promisify } from "util";

import request from "request";
//const {parse} = require('./scraper')

const wp = new wpapi({ endpoint: "https://panlasangpinoy.com/wp-json" });
const page = { count: 0 };
function getAll(request) {
  return request.then(function (response) {
    page.count += response.length;
    console.log("Crawled pages: ", page.count);
    if (!response._paging || !response._paging.next) {
      return response;
    }
    return Promise.all([response, getAll(response._paging.next)]).then(
      function (responses) {
        return responses.flat();
      }
    );
  });
}
wp.posts()
  .perPage(100)
  .page(27)
  .then((data) => {
    // getAll(wp.posts().perPage(100)).then((data) => {
    const allRecipes = data.map(async (recipe) => {
      const { id, title, slug, parent, content, categories, link } = recipe;

      const new_request = promisify(request);

      const { response, body } = await new_request(link);

      const {
        image,
        video,
        description,
        prep_time,
        cook_time,
        total_time,
        servings,
        calories,

        instructions,
        ingredients,
        nutritions,
        related,
      } = await parse(body);

      return {
        id,
        title: title.rendered,
        // title,
        slug,
        parent,
        description,
        image,
        link,
        video,
        prep_time,
        cook_time,
        total_time,
        servings,
        calories,

        related,
        instructions,
        ingredients,
        nutritions,
        categories,
      };
    });
    Promise.all(allRecipes).then((recipes) => {
      writeFile("recipes27.json", JSON.stringify({ recipes }), (err) => {
        console.log("success");
      });
    });
  });

// wp.posts()
//   .perPage(10)
//   .then((data) => {
//     data.map((result) => {
//       request(result.link, (err, res, body) => {
//         parse(body).then((recipes) => {
//           console.log(recipes);
//         });
//       });
//     });
//   });
