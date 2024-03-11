import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FilterDetails from "../../components/FilterDetails/FilterDetails";
import "./Details.css";
import { useParams } from "react-router-dom";

// Api-link nach ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const Details = () => {
  // state für gefetchte Daten:
  const [detail, setDetail] = useState();

  // Link auslesen, damit wir ihn im fetch-Link nutzen können:
  const { id } = useParams();
  console.log(id);

  // Fetchen der Daten und speichern im state detail:
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(detail);

  return (
    <main>
      <section className="details">
        {detail ? (
          <div>
            <img
              src={detail.meals[0].strMealThumb}
              alt={detail.meals[0].strMeal}
            />
            <div className="details__textblock">
              <h2>{detail.meals[0].strMeal}</h2>
              <div className="details__textblock-desc">
                <p>{detail.meals[0].strCategory}</p>
                <p>{detail.meals[0].strArea}</p>
              </div>
              <FilterDetails
                instructions={detail.meals[0].strInstructions}
                ingredient1={detail.meals[0].strIngredient1}
                ingredient2={detail.meals[0].strIngredient2}
                ingredient3={detail.meals[0].strIngredient3}
                ingredient4={detail.meals[0].strIngredient4}
                ingredient5={detail.meals[0].strIngredient5}
                ingredient6={detail.meals[0].strIngredient6}
                ingredient7={detail.meals[0].strIngredient7}
                ingredient8={detail.meals[0].strIngredient8}
              />
            </div>
          </div>
        ) : (
          <p>Laden ...</p>
        )}
      </section>

      <Navigation />
    </main>
  );
};

export default Details;
