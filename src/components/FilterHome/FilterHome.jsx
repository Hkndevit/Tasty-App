import "./FilterHome.css";
import { useState, useEffect, useContext } from "react";
import { areaContext } from "../../context/Context";
import { Link } from "react-router-dom";

export const FilterHome = () => {
  const [area, setArea] = useState([]);

  const { setAreaValue } = useContext(areaContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
      (res) =>
        res
          .json()
          .then((data) => setArea(data))
          .catch((err) => console.error("No data received", err))
    );
  }, []);

  const getAreaContent = (e) => {
    setAreaValue(e.target.textContent);
  };

  return (
    <section className="filter filter__home">
      <div className="filter__home__heading-container">
        <h3>Areas</h3>
        <Link to="/search/area" className="filter__home__link">
          See all
        </Link>
      </div>
      <article className="filter__data-container">
        {area.meals ? (
          area.meals.map((item, index) => {
            return (
              <Link
                to="/search/area"
                className="filter__data__home"
                key={index}
              >
                <span onClick={getAreaContent}>{item.strArea}</span>
              </Link>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </section>
  );
};
