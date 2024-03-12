import "./SearchCategory.css";
import Navigation from "../../components/Navigation/Navigation";
import SearchHeadline from "../../components/SearchHeadline/SearchHeadline";
import { useEffect, useState, useContext } from "react";
import Filter from "../../components/Filter/Filter";

const SearchCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error("No data received", err));
  }, []);

  return (
    <main>
      <SearchHeadline />
      <Filter data={category} itemFilter="strCategory" />
      <Navigation />
    </main>
  );
};

export default SearchCategory;
