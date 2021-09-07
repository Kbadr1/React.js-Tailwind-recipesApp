import React from "react";

const ViewMore = ({ recipes, limit, setLimit }) => {
  return (
    <div>
      {recipes.length >= 12 && (
        <div className="text-center my-12">
          <button
            onClick={() => setLimit(limit + 12)}
            className="text-white  bg-indigo-500 hover:bg-indigo-800 transition duration-500 font-medium rounded-md py-2 px-4"
          >
            View more Recipes
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewMore;
