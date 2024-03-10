import { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [catego, setCatego] = useState();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((respo) => respo.json())
      .then((allCatego) => setCatego(allCatego))
      .catch((err) => console.error("Fehler in Catego-Fetch", err));
  }, []);

  return (
    <section>
      <h2>Categories</h2>
      <p>See All</p>

      {catego ? (
        catego.categories.map((singleCatego, index) => (
          <div key={index}>
            <img src={singleCatego.strCategoryThumb} alt="" />
            <p>{singleCatego.strCategory}</p>
          </div>
        ))
      ) : (
        <p>loading..</p>
      )}
    </section>
  );
};

export default Categories;
