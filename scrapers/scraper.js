import { load, text } from "cheerio";
const parse = (html) => {
  const $ = load(html);
  const title = $(".wprm-recipe-name").text();
  const video = $(".wprm-recipe-video").find("iframe").length
    ? $(".wprm-recipe-video")
        .find("iframe")
        .attr("src")
        .replace("?feature=oembed", "")
    : "";
  const image = $(".entry-content").find("img").attr("data-src");
  const description = $(".entry-content").find("p").first().text();

  const instructions = $(".wprm-recipe-instruction-text").map(function () {
    return $(this).text();
  });

  const ingredients = $(".wprm-recipe-ingredient").map(function () {
    return $(this).text();
  });

  const nutritions = $(".wprm-nutrition-label-container").text().split(" | ");

  const related = $(".crp_related")
    .find("a")
    .map(function () {
      return $(this).attr("class").replace("crp_link post-", "");
    });

  const prep_time = $(".wprm-recipe-prep-time-container").text();
  const cook_time = $(".wprm-recipe-cook-time-container").text();
  const total_time = $(".wprm-recipe-total-time-container").text();
  const servings = $(".wprm-recipe-servings-container").text();
  const calories = $(".wprm-recipe-calories-container").text();

  return new Promise((resolve, reject) => {
    resolve({
      title,
      image,
      video,
      prep_time,
      cook_time,
      total_time,
      servings,
      calories,

      description,

      instructions: instructions.toArray(),
      ingredients: ingredients.toArray(),
      nutritions,
      related: related.toArray().length ? related.toArray() : [],
    });
  });
};

export default parse;
