import Recipe from "@/components/Recipe/Recipe";
import RecipeSkeleton from "@/components/Recipe/RecipeSkeleton";
import { Suspense } from "react";

type Props = {
  params: { id: string };
};

export default async function RecipePage({ params }: Props) {
  const recipeId = await params.id;

  return (
    <div className="p-8 text-gray-200">
      <Suspense fallback={<RecipeSkeleton />}>
        <Recipe id={recipeId} />
      </Suspense>
    </div>
  );
}
