import { Link } from "react-router-dom";
import "./Random.css";
import { useState, useEffect } from "react";

const Random = () => {
  const [random, setRandom] = useState();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((respo) => respo.json())
      .then((data) => setRandom(data))
      .catch((err) => console.error("Fehler im Code", err));
  }, []);
  console.log(random);

  return (
    <section className="random">
      <div>
        <h3>Meal of the Day</h3>
      </div>
      <div className="random__card">
        <div className="random__foodPic">
          <img src="/images/Frame 490.png" alt="" />
        </div>
        <div>
          {random ? (
            random.meals.map((singleRandom, index) => (
              <Link
                className="randomLink"
                to={`/details/${singleRandom.idMeal}`}
                key={index}
              >
                <h4 className="random__h4">{singleRandom.strMeal}</h4>
                <div className="random__wrapper">
                  <div className="random__cardText">
                    <svg
                      className="circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4c4c4"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      />
                    </svg>
                    <p>{singleRandom.strCategory}</p>
                  </div>
                  <div className="random__infoZeile">
                    <p>{singleRandom.strArea}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>loading..</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Random;
