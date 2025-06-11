import { Recipe, RecipesSearchParams } from "@/types/recipes";
import Image from "next/image";
import Link from "next/link";
import ErrorContainer from "../ErrorContainer";

type Props = {
  searchParams: RecipesSearchParams;
};

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

async function getRecipies(searchParams: RecipesSearchParams) {
  const { query = "", cuisine = "", maxReadyTime = "" } = searchParams;

  const apiKey = process.env.API_KEY ?? "";
  const params = new URLSearchParams();

  if (query) {
    params.append("query", query);
  }
  if (cuisine) {
    params.append("cuisine", cuisine);
  }
  if (maxReadyTime) {
    params.append("maxReadyTime", maxReadyTime);
  }

  params.append("apiKey", apiKey);

  const url = `${API_URL}?${params.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error("API error:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    const recipes: Recipe[] = data.results || [];

    return recipes;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return null;
  }
}

export default async function Recipes({ searchParams }: Props) {
  const recipes = await getRecipies(searchParams);

  if (!recipes) {
    return <ErrorContainer />;
  }

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="bg-[#303036] shadow-2xl rounded-2xl p-4 transition hover:scale-110"
        >
          <Link
            href={`/recipes/${recipe.id}`}
            className="flex flex-col justify-between h-full"
          >
            <h2 className="text-xl mb-2">{recipe.title}</h2>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={400}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
