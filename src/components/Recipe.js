import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className="text-center shadow bg-white p-4 rounded-md cursor-pointer"
        onClick={() => setShow(true)}
      >
        <div className="overflow-hidden">
          <img
            src={recipe.image}
            className="w-full  transform hover:scale-110 transition duration-500"
            alt=""
          />
        </div>
        <h6 className="font-semibold py-5 text-lg">{recipe.label}</h6>
      </div>
      {show && <RecipeDetails recipe={recipe} setShow={setShow} />}
    </div>
  );
};

export default Recipe;
