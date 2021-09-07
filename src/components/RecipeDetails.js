import React from "react";

const RecipeDetails = ({ recipe, setShow }) => {
  return (
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-75 z-10 left-0 top-0  shadow-2xl ">
      <div className="bg-gray-100 rounded fixed transform  top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 w-11/12 lg:w-4/5 xl:w-3/5 2xl:w-auto p-4 my-4 md:my-auto h-full md:h-auto overflow-y-scroll lg:overflow-auto">
        <button
          className="float-right font-bold  text-red-700 text-xs"
          onClick={() => setShow(false)}
        >
          Close
        </button>
        <h1 className="font-bold text-center text-indigo-900 text-2xl mb-6">
          {recipe.label}
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex justify-center col-span-3 md:col-span-1">
            <img className="rounded" src={recipe.image} alt="" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <h6 className="font-semibold text-lg py-">Ingredients:</h6>
            <ul className="list-disc list-inside ">
              {recipe.ingredientLines.map((ingredient) => (
                <li className="font-medium my-1" key={ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
