import { RecipeDetails } from "@/types/recipes";
import Image from "next/image";
import ErrorContainer from "../ErrorContainer";

type Props = {
  id: string;
};

const API_URL = "https://api.spoonacular.com/recipes";

async function getRecipeDetails(id: string): Promise<RecipeDetails | null> {
  const apiKey = process.env.API_KEY;
  const url = `${API_URL}/${id}/information?apiKey=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error("Failed to fetch recipe:", res.status, res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}

export default async function Recipe({ id }: Props) {
  const recipe = await getRecipeDetails(id);

  if (!recipe) {
    return <ErrorContainer />;
  }

  return (
    <div className="flex flex-col gap-8 items-center max-w-5xl mx-auto">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          {recipe.title}
        </h1>
        <p className="flex flex-wrap  justify-center gap-x-4 text-sm text-gray-400">
          <span>Preparation time: {recipe.readyInMinutes}</span>
          <span>Servings: {recipe.servings}</span>
          <span>Health score: {recipe.healthScore}</span>
        </p>
      </div>

      <div className="relative w-full h-72 sm:h-96 rounded-md overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <p>List of ingredients:</p>
        <ul className="pl-8">
          {recipe.extendedIngredients.map((ingredient) => {
            return (
              <li key={ingredient.id} className=" list-disc ">
                {ingredient.original}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-4">
        <div className="text-center text-2xl ">Summary</div>
        <div className="w-full border" />
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </div>
    </div>
  );
}
