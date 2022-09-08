import { ApolloServer, gql } from "apollo-server-express";

import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

import { RESTDataSource } from "apollo-datasource-rest";

import http from "http";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

const typeDefs = gql`
  type Category {
    id: ID!
    count: Int
    name: String
    slug: String
    parent: Int
    description: String
    link: String
    image: String
  }
  type Recipe {
    id: ID!
    title: String
    slug: String
    image: String
    description: String
    link: String
    video: String
    prep_time: String
    cook_time: String
    total_time: String
    servings: String
    calories: String
    categories: [Int]
    nutritions: [String]
    ingredients: [String]
    instructions: [String]
    related: [String]
  }

  type Query {
    categories: [Category]
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    getCategoryById(categoryId: ID!): Category
    getRecipeById(recipeId: ID!): Recipe
    searchByTitle(recipeTitle: String): [Recipe]
  }
`;

class RecipeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://vercel-api-ebon-nine.vercel.app/api/";
  }
  recipeReducer(recipe) {
    return {
      id: recipe.id || 0,
      title: recipe.title,
      image: recipe.image,
      slug: recipe.slug,
      description: recipe.description,
      link: recipe.link,
      video: recipe.video,
      prep_time: recipe.prep_time,
      cook_time: recipe.cook_time,
      total_time: recipe.total_time,
      servings: recipe.servings,
      calories: recipe.calories,
      categories: recipe.categories,
      nutritions: recipe.nutritions,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      related: recipe.related || 0,
    };
  }

  categoryReducer(category) {
    return {
      id: category.id,
      count: category.count,
      name: category.name,
      slug: category.slug,
      parent: category.parent,
      description: category.description,
      link: category.link,
      image: category.image,
    };
  }

  async getAllCategories() {
    const { categories } = await this.get("categories");
    return categories
      ? categories.map((category) => this.categoryReducer(category))
      : [];
  }
  async getAllRecipes() {
    const { recipes } = await this.get("recipes");
    return recipes ? recipes.map((recipe) => this.recipeReducer(recipe)) : [];
  }

  async getRecipeById({ recipeId }) {
    const recipe = await this.get(`recipes/${encodeURIComponent(recipeId)}`);
    return recipe ? this.recipeReducer(recipe) : {};
  }
  async getCategoryById({ categoryId }) {
    const category = await this.get(
      `categories/${encodeURIComponent(categoryId)}`
    );
    return category ? this.recipeReducer(category) : {};
  }
  async searchByTitle({ recipeTitle }) {
    const recipes = await this.get(`search/${encodeURIComponent(recipeTitle)}`);
    return recipes ? recipes.map((recipe) => this.recipeReducer(recipe)) : [];
  }
}
const recipeAPI = new RecipeAPI();

const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) =>
      dataSources.recipeAPI.getAllCategories(),
    recipes: async (_, __, { dataSources }) =>
      dataSources.recipeAPI.getAllRecipes(),
    getRecipeById: (_, { recipeId }, { dataSources }) =>
      dataSources.recipeAPI.getRecipeById({ recipeId }),
    getCategoryById: (_, { categoryId }, { dataSources }) =>
      dataSources.recipeAPI.getCategoryById({ categoryId }),
    searchByTitle: (_, { recipeTitle }, { dataSources }) =>
      dataSources.recipeAPI.searchByTitle({ recipeTitle }),
  },
};

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      recipeAPI,
    }),
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

export default httpServer;
