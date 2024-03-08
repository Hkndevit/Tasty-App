import './Filter'
import { useEffect, useState } from 'react'

const Filter = ({ data }) => {
  const [area, setArea] = useState('American')
  const [meal, setMeal] = useState([])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then(
      (res) => res.json().then((data) => setMeal(data))
    )
  }, [area])

  return (
    <>
      {/* Render all Areas */}
      <section className="filter">
        <article className="filter__data-container">
          {data.meals ? (
            data.meals.map((item, index) => {
              return (
                <div
                  onClick={(e) => setArea(e.target.textContent)}
                  className="filter__data"
                  key={index}>
                  {item.strArea}
                </div>
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </article>
      </section>
      {/* Render Meals per Area */}
      <section className="grid">
        {meal.meals ? (
          meal.meals.map((item) => {
            return (
              <div
                className="grid__item"
                key={item.idMeal}>
                <img
                  className="grid__item__image"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <p className="grid__item__text">{item.strMeal}</p>
              </div>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  )
}

export default Filter
