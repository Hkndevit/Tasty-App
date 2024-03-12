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
  detail ? getIngredients() : console.log("ingredient geht nicht");

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
  detail ? getMeasures() : console.log("measures geht nicht");

  return (
    <main>
      <section className="details">
        {detail ? (
          <div>
            <img
              onClick={() => navigate(-1)}
              className="details--img__arrow"
              src="/images/Arrow - Left.svg"
              alt="arrow to the left"
            />
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
      </section>

      <Navigation />
    </main>
  );
};

export default Details;
