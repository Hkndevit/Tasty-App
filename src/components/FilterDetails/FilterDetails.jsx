import { useState } from "react";
import "./FilterDetails.css";

//! props: instructions, ingredients, measures
const FilterDetails = (props) => {
  //* state dafür, welcher Button getoggelt ist (instructions oder ingredients):
  const [theme, setTheme] = useState(false);
  // console.log(props.instructions);
  // console.log(props.ingredient);

  //* Funktion für onclick:
  const changeTheme = () => {
    setTheme((item) => !item);
  };

  return (
    <section className="filter-details">
      <div>
        {/* //* Klick-Funktionen, um den state zu ändern - dabei jedes Mal die Klasse ändern, je nachdem welcher Button aktiv ist: */}
        <p
          onClick={changeTheme}
          className={
            theme ? "filter-details__p-white" : "filter-details__p-black"
          }
        >
          Ingredients
        </p>
        <p
          onClick={changeTheme}
          className={
            theme ? "filter-details__p-black" : "filter-details__p-white"
          }
        >
          Instructions
        </p>
      </div>

      {/* //! Ingredients */}
      {/* //* je nach state hide- und show-classes hinzufügen: */}
      <article className={`filter-details__ingredients ${theme ? "hide" : ""}`}>
        <h3>Ingredients</h3>
        {/* //* mit Props über ingredients-array mappen, um die Inhalte aus dem Fetch von Details rendern: */}
        {/* -> darin können wir dann auch die props.measures ansprechen */}
        <article>
          {props.ingredients.map((item, index) => (
            <section key={index}>
              <p>{props.measures[index]}</p>
              <p>{item}</p>
            </section>
          ))}
        </article>
      </article>

      {/* //! Instructions */}
      {/* //* je nach state hide- und show-classes hinzufügen: */}
      <article
        className={`filter-details__instructions ${theme ? "show" : ""}`}
      >
        {/* //* mit den Props die Inhalte aus dem Fetch von Details rendern: */}
        <h3>Instructions</h3>
        <p>{props.instructions}</p>
      </article>
    </section>
  );
};

export default FilterDetails;
