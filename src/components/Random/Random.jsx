import { Link } from "react-router-dom";
import "./Random.css";

const Random = () => {
  // const [random, setRandom] = useState();
  // useEffect(() => {
  //   fetch("www.themealdb.com/api/json/v1/1/random.php")
  //     .then((respo) => respo.json())
  //     .then((data) => setCatego(data))
  //     .catch((err) => console.error("Fehler im Code", err));
  // }, []);

  return (
    <section className="random">
      <div>
        <h1>Meal of the Day</h1>
      </div>
      <div className="random__card">
        <div className="random__foodPic">
          <img src="/images/Frame 490.png" alt="" />
        </div>
        <div className="random__h1">
          <Link className="randomLink" to="/details/52895">
            <h1>Full English Breakfast</h1>
          </Link>
        </div>

        {/* Gerade Dabei  */}

        <div className="random__wrapper">
          <div className="random__cardText">
            <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#c4c4c4" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />{" "}
            </svg>
            <p>Breakfast</p>
          </div>
          <p>British</p>
        </div>
      </div>
    </section>
  );
};

export default Random;
