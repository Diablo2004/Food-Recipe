import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNotFoundMessage(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) return <div>Loading... Please wait!</div>;

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          {showNotFoundMessage && (
            <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
              Recipe Not Found!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
