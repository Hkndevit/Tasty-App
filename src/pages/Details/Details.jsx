import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FilterDetails from "../../components/FilterDetails/FilterDetails";
import "./Details.css";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  //* Variable für Navigate() für den Back-to-previous-site-Button:
  const navigate = useNavigate();

  //* state für gefetchte Daten:
  const [detail, setDetail] = useState();

  //* Variablen mit leerem Array, um die Ingredients und measures dort hinein zu pushen:
  let ingredients = [];
  let measures = [];

  //* dynamisches Link-Ende auslesen, damit wir ihn im fetch-Link nutzen können:
  const { id } = useParams();

  //* Fetchen der Daten und Speichern im state namens detail:
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, []);

  //* Funktion zum Filtern der Daten nach Ingredients und null-Inhalte rausfiltern:
  const getIngredients = () => {
    for (let item in detail.meals[0]) {
      if (item.includes("strIngredient")) {
        if (
          typeof detail.meals[0][item] != "string" ||
          detail.meals[0][item] === ""
        ) {
          return;
        } else {
          ingredients.push(detail.meals[0][item]);
        }
      }
    }
  };

  //* Funktionsaufruf für ingredients, aber nur, wenn in detail-state die Daten bereits enthalten sind:
  detail ? getIngredients() : console.log("Loading ingredients");

  //* Funktion zum Filtern der Daten nach Measures und null-Inhalte rausfiltern:
  const getMeasures = () => {
    for (let item in detail.meals[0]) {
      if (item.includes("strMeasure")) {
        if (
          typeof detail.meals[0][item] != "string" ||
          detail.meals[0][item] === ""
        ) {
          return;
        } else {
          measures.push(detail.meals[0][item]);
        }
      }
    }
  };

  //* Funktionsaufruf für mesasures, aber nur, wenn in detail-state die Daten bereits enthalten sind:
  detail ? getMeasures() : console.log("Loading measures");

  return (
    <main>
      <section className="details">
        {detail ? (
          <div>
            <svg
              onClick={() => navigate(-1)}
              className="details--img__arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <img
              className="details--img__food"
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
                ingredients={ingredients}
                measures={measures}
              />
            </div>
          </div>
        ) : (
          <p>Laden ...</p>
        )}
      </section>{" "}
      <Navigation />
    </main>
  );
};

export default Details;
