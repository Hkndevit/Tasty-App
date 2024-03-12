import './Filter'
import { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { areaContext } from '../../context/Context'

const Filter = ({ data, itemFilter }) => {
  // Area Data
  const [singleArea, setSingleArea] = useState('American')
  const [mealArea, setMealArea] = useState([])
  const [filteredAreaMeals, setFilteredAreaMeals] = useState([])

  // Category Data
  const [singleCategory, setSingleCategory] = useState('Vegetarian')
  const [mealCategory, setMealCategory] = useState([])
  const [filteredCategoryMeals, setFilteredCategoryMeals] = useState([])

  // User Input
  const [userInput, setUserInput] = useState('')

  // Location Information
  const location = useLocation()
  const { pathname } = location

  // useContext
  const { areaValue, setAreaValue } = useContext(areaContext)

  // Get the Meals for the Specific Area
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${
        areaValue.length !== 0 ? areaValue : singleArea
      }`
    ).then((res) =>
      res.json().then((data) => {
        setMealArea(data)
      })
    )
  }, [singleArea, areaValue])

  // Get the Meals for the Specific Category
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${singleCategory}`
    ).then((res) => res.json().then((data) => setMealCategory(data)))
  }, [singleCategory])

  // Get filtered Meals by Area
  useEffect(() => {
    const filter = mealArea.meals
      ? mealArea.meals.filter((item) => {
          return item.strMeal.toLowerCase().includes(userInput)
        })
      : ''

    setFilteredAreaMeals(filter)
  }, [userInput])

  // Get filtered Meals by Category
  useEffect(() => {
    const filter = mealCategory.meals
      ? mealCategory.meals.filter((item) => {
          return item.strMeal.toLowerCase().includes(userInput)
        })
      : ''

    setFilteredCategoryMeals(filter)
  }, [userInput])

  return (
    <>
      {/* Formular zur Abfrage des User Inputs */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className='Home__Search'
        style={{ marginBlock: '1rem' }}>
        <img src='/images/Search.svg' alt='' />
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value.toLowerCase())}
          type='text'
          placeholder='Search'
        />
      </form>

      {/* Render all Areas with the data Prop from SearchArea */}
      <section className='filter'>
        <article className='filter__data-container'>
          {data.meals ? (
            data.meals.map((item, index) => {
              return (
                <div
                  // Get Specific Area Name and Save it as SingleArea State
                  onClick={(e) => {
                    setAreaValue('')
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
      {userInput.length === 0 && pathname === '/search/area' && (
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

      {/* Render Filterd Meals per Area after User Input */}
      {userInput.length !== 0 && pathname === '/search/area' && (
        <section className='grid'>
          {filteredAreaMeals ? (
            filteredAreaMeals.map((item) => {
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
      {userInput.length === 0 && pathname === '/search/category' && (
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

      {/* Render Filterd Meals per Category after User Input */}
      {userInput.length !== 0 && pathname === '/search/category' && (
        <section className='grid'>
          {filteredCategoryMeals ? (
            filteredCategoryMeals.map((item) => {
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
