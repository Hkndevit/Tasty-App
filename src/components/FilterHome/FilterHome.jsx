import './FilterHome.css'
import { useState, useEffect } from 'react'

export const FilterHome = () => {
  const [area, setArea] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then(
      (res) =>
        res
          .json()
          .then((data) => setArea(data))
          .catch((err) => console.error('No data received', err))
    )
  }, [])

  return (
    <section className='filter filter__home'>
      <div className='filter__home__heading-container'>
        <h2>Areas</h2>
        <p>See all</p>
      </div>
      <article className='filter__data-container'>
        {area.meals ? (
          area.meals.map((item, index) => {
            return (
              <div className='filter__data' key={index}>
                {item.strArea}
              </div>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </section>
  )
}
