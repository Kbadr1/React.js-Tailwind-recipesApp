import React from "react";
import Recipe from "./Recipe";

const Recipes = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12 ">
      {recipes.map(({ recipe }) => (
        <Recipe recipe={recipe} key={recipe.url} />
      ))}
    </div>
  );
};

export default Recipes;
