import { writeFile } from "fs";
import wpapi from "wpapi";

import request from "request";

import { load } from "cheerio";

const wp = new wpapi({ endpoint: "https://panlasangpinoy.com/wp-json" });

function getAll(request) {
  return request.then(function (response) {
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
const getImage = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      const $ = load(body);
      const image = $("a.entry-image-link")
        .first()
        .find("img")
        .attr("data-src");
      resolve(image);
    });
  });
};
getAll(wp.categories()).then((data) => {
  const results = data.map(async (category) => {
    const { id, count, name, slug, parent, description, link } = category;
    return {
      id,
      count,
      name,
      slug,
      parent,
      description,
      link,
      image: await getImage(link),
    };
  });

    Promise.all(results).then(categories => {
        writeFile('categories.json', JSON.stringify({categories}), (err) => {
            console.log('success')
        })
    })

});
