import { useState } from "react";
import "./FilterDetails.css";

//! props: instructions, ingredient1-20
const FilterDetails = (props) => {
  //* state dafür, welcher Button getoggelt ist (instructions oder ingredients):
  const [theme, setTheme] = useState(false);

  //* Funktion für onclick:
  const changeTheme = () => {
    setTheme((item) => !item);
  };
  // console.log(theme);

  return (
    <section className="filter-details">
      <div>
        {/* //* Klick-Funktionen, um den state zu ändern: */}
        <p onClick={changeTheme}>Ingredients</p>
        <p onClick={changeTheme}>Instructions</p>
      </div>

      {/* //* je nach state hide- und show-classes hinzufügen: */}
      <article className={`filter-details__ingredients ${theme ? "hide" : ""}`}>
        <h3>Ingredients</h3>
        {/* //* mit den Props die Inhalte aus dem Fetch von Details rendern: */}
        <p>{props.ingredient8 != null ? props.ingredient8 : ""}</p>
        <p>{props.ingredient2 != null ? props.ingredient2 : ""}</p>
        <p>{props.ingredient3 != null ? props.ingredient3 : ""}</p>
        <p>{props.ingredient4 != null ? props.ingredient4 : ""}</p>
        <p>{props.ingredient5 != null ? props.ingredient5 : ""}</p>
        <p>{props.ingredient6 != null ? props.ingredient6 : ""}</p>
        <p>{props.ingredient7 != null ? props.ingredient7 : ""}</p>
        <p>{props.ingredient8 != null ? props.ingredient8 : ""}</p>
      </article>

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
