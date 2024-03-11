import './Filter'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Filter = ({ data, itemFilter }) => {
  const [singleArea, setSingleArea] = useState('American')
  const [mealArea, setMealArea] = useState([])
  const [singleCategory, setSingleCategory] = useState('Vegetarian')
  const [mealCategory, setMealCategory] = useState([])

  const location = useLocation()
  const { pathname } = location

  // Get the Meals for the Specific Area
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${singleArea}`
    ).then((res) => res.json().then((data) => setMealArea(data)))
  }, [singleArea])

  // Get the Meals for the Specific Category
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${singleCategory}`
    ).then((res) => res.json().then((data) => setMealCategory(data)))
  }, [singleCategory])

  return (
    <>
      {/* Render all Areas with the data Prop from SearchArea */}
      <section className='filter'>
        <article className='filter__data-container'>
          {data.meals ? (
            data.meals.map((item, index) => {
              return (
                <div
                  // Get Specific Area Name and Save it as SingleArea State
                  onClick={(e) => {
                    setSingleArea(e.target.textContent)
                    setSingleCategory(e.target.textContent)
                  }}
                  className='filter__data'
                  key={index}>
                  {item[itemFilter]}
                </div>
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </article>
      </section>

      {/* Render Meals per Area */}
      {pathname === '/search/area' && (
        <section className='grid'>
          {mealArea.meals ? (
            mealArea.meals.map((item) => {
              return (
                <Link
                  to={`/details/${item.idMeal}`}
                  className='grid__item'
                  key={item.idMeal}>
                  <img
                    className='grid__item__image'
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                  <p className='grid__item__text'>{item.strMeal}</p>
                </Link>
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
      )}

      {/* Render Meals per Category */}
      {pathname === '/search/category' && (
        <section className='grid'>
          {mealCategory.meals ? (
            mealCategory.meals.map((item) => {
              return (
                <Link
                  to={`/details/${item.idMeal}`}
                  className='grid__item'
                  key={item.idMeal}>
                  <img
                    className='grid__item__image'
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                  <p className='grid__item__text'>{item.strMeal}</p>
                </Link>
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
      )}
    </>
  )
}

export default Filter
