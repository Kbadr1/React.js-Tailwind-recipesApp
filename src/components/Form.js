import React from "react";

const Form = ({ getSearchResults, searchQuery, setSearchQuery }) => {
  return (
    <form onSubmit={getSearchResults} className="flex justify-center py-12">
      <input
        className="font-medium  focus:outline-none  border border-solid border-indigo-500 p-2 w-9/12 sm:w-4/5 lg:w-2/5 2xl:w-3/5 rounded-md rounded-tr-none rounded-br-none"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="focus:bg-indigo-800 focus:border-indigo-800 border border-indigo-500 text-white bg-indigo-500 font-medium border-l-0 p-2 rounded-md rounded-tl-none rounded-bl-none"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
