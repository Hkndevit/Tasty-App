import "./SearchResults.css";
import Navigation from "../../components/Navigation/Navigation";
import SearchHeadline from "../../components/SearchHeadline/SearchHeadline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  //* state mit leerem string, um darin User-Input zu speichern:
  const [userInput, setUserInput] = useState(null); //--> "null", weil leerer string trotzdem immer ein array mit 25 random meals ausgibt

  //* state mit leerem array, um darin die gefetchten Daten zu speichern:
  const [inputData, setInputData] = useState([]);

  //* Funktion, um User-Input auszulesen und im state zu speichern:
  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //* Fetchen der Daten mit dem User-Input in Abhängigkeit von Veränderungen am userInput:
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
      .then((res) => res.json())
      .then((data) => setInputData(data))
      .catch((err) => console.log(err));
  }, [userInput]);

  // console.log(inputData);

  return (
    <main>
      <SearchHeadline />

      {/*//* Search-Input: */}
      <form className="Home__Search">
        <img src="/images/Search.svg" alt="" />
        <input
          type="text"
          placeholder="  Search"
          autoFocus
          onChange={getUserInput}
        />
      </form>

      <div
        className={`search__img-container ${
          userInput ? "search__img-container--hide" : ""
        }`}
      >
        <img src="/images/boarding-logo.png" alt="" />
      </div>

      {/* //* Search-Output: */}
      <article className="search__output">
        {userInput != null && inputData.meals ? (
          inputData.meals.map((item, index) => (
            <article key={index}>
              <img
                className="search__output--img"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <div>
                <h4>{item.strMeal}</h4>
                <p>
                  <img src="/images/circle.svg" alt="circle" />
                  {item.strCategory}
                </p>
              </div>
              <Link to={`/details/${item.idMeal}`}>
                <img
                  src="/images/Arrow Right - Small.svg"
                  alt="arrow to the right"
                />
              </Link>
            </article>
          ))
        ) : (
          <p></p>
        )}
      </article>

      <Navigation />
    </main>
  );
};

export default SearchResults;
