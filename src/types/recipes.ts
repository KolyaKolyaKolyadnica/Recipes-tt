export type RecipesSearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type RecipeDetails = {
  id: number;
  title: string;
  image: string;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
  readyInMinutes: number;
  servings: number;
  healthScore: number;
  summary: string;
};
