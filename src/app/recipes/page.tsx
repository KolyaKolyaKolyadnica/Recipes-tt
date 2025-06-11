import Recipes from "@/components/Recipes/Recipes";
import RecipesSkeleton from "@/components/Recipes/RecipesSkeleton";
import { RecipesSearchParams } from "@/types/recipes";
import { Suspense } from "react";

type Props = {
  searchParams: RecipesSearchParams;
};

export default async function RecipesPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="p-8 text-gray-200">
      <h1 className="text-3xl mb-6">Recipes</h1>

      <Suspense fallback={<RecipesSkeleton />}>
        <Recipes searchParams={params} />
      </Suspense>
    </div>
  );
}
