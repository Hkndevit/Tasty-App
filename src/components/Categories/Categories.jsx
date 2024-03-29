import "./Categories.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoryContext } from "../../context/Context";

const Categories = () => {
  const [catego, setCatego] = useState();
  const { setCategoryValue } = useContext(categoryContext);

  const getCatValue = (e) => {
    setCategoryValue(e.target.closest("div").querySelector("p").textContent);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((respo) => respo.json())
      .then((allCatego) => setCatego(allCatego))
      .catch((err) => console.error("Fehler in Catego-Fetch", err));
  }, []);

  return (
    <section className="categories">
      <div className="categories__see-all">
        <h3>Categories</h3>
        <Link to="/search/category" className="categories__see-all__link">
          See all
        </Link>
      </div>
      <Link to="/search/category">
        <article onClick={getCatValue}>
          {catego ? (
            catego.categories.map((singleCatego, index) => (
              <div className="categories__content" key={index}>
                <img src={singleCatego.strCategoryThumb} alt="" />
                <p>{singleCatego.strCategory}</p>
              </div>
            ))
          ) : (
            <p>loading..</p>
          )}
        </article>
      </Link>
    </section>
  );
};

export default Categories;
