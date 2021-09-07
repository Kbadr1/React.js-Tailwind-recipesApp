import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import ViewMore from "./components/ViewMore";

function App() {
  const [recipeName, setRecipeName] = useState("pasta");
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [limit, setLimit] = useState(12);

  const getRecipes = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${recipeName}&app_id=214ccde6&app_key=8e1e5fa6c6fbf0476aead59fff1b1d2c&from=0&to=${limit}`
      )
      .then((res) => {
        setRecipes(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  const getSearchResults = (e) => {
    e.preventDefault();
    setRecipeName(searchQuery);
    setSearchQuery("");
  };

  useEffect(() => {
    if (recipeName === "") return;
    getRecipes();
  }, [recipeName, limit]);

  return (
    <div className="App container mx-auto">
      <Form
        getSearchResults={getSearchResults}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Recipes recipes={recipes} />
      <ViewMore recipes={recipes} limit={limit} setLimit={setLimit} />
    </div>
  );
}

export default App;
