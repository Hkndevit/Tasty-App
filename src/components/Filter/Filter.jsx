import './Filter'
import { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { areaContext, categoryContext } from '../../context/Context'

const Filter = ({ data, itemFilter }) => {
  // Area Data
  const [singleArea, setSingleArea] = useState('American')
  const [mealArea, setMealArea] = useState([])
  const [filteredAreaMeals, setFilteredAreaMeals] = useState([])

  // Category Data
  const [singleCategory, setSingleCategory] = useState('Beef')
  const [mealCategory, setMealCategory] = useState([])
  const [filteredCategoryMeals, setFilteredCategoryMeals] = useState([])

  // User Input
  const [userInput, setUserInput] = useState('')

  // Location Information
  const location = useLocation()
  const { pathname } = location

  // useContext
  const { areaValue, setAreaValue } = useContext(areaContext)
  const { categoryValue, setCategoryValue } = useContext(categoryContext)

  // Toggler for Areas/Categories Colors
  const [toggleAreaColor, setToggleAreaColor] = useState(false)
  const [toggleCategoryColor, setToggleCategoryColor] = useState(false)

  useEffect(() => {
    areaValue.length !== 0
      ? setToggleAreaColor(true)
      : setToggleAreaColor(false)
  }, [areaValue])

  useEffect(() => {
    categoryValue.length !== 0
      ? setToggleCategoryColor(true)
      : setToggleCategoryColor(false)
  }, [categoryValue])

  // Get the Meals for the Specific Area
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${
        areaValue.length !== 0 ? areaValue : singleArea
      }`
    ).then((res) => res.json().then((data) => setMealArea(data)))
  }, [singleArea, areaValue])

  // Get the Meals for the Specific Category
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
        categoryValue.length !== 0 ? categoryValue : singleCategory
      }`
    ).then((res) => res.json().then((data) => setMealCategory(data)))
  }, [singleCategory, categoryValue])

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
                    setSingleArea(e.target.textContent)
                    setSingleCategory(e.target.textContent)
                    setAreaValue('')
                    setCategoryValue('')
                  }}
                  // className='filter__data'
                  className={
                    (item[itemFilter] === singleArea &&
                      toggleAreaColor === false) ||
                    (item[itemFilter] === singleCategory &&
                      toggleCategoryColor === false) ||
                    (item[itemFilter] === areaValue && toggleAreaColor) ||
                    (item[itemFilter] === categoryValue && toggleCategoryColor)
                      ? 'filter__data filter__data--active'
                      : 'filter__data '
                  }
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
