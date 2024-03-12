import './SearchArea.css'
import Filter from '../../components/Filter/Filter'
import Navigation from '../../components/Navigation/Navigation'
import SearchHeadline from '../../components/SearchHeadline/SearchHeadline'
import { useEffect, useState } from 'react'

const SearchArea = () => {
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
    <main>
      <div className='search-area-wrapper'>
        <h1>SearchArea</h1>
        <SearchHeadline />
        <Filter data={area} itemFilter='strArea' />
      </div>
      <Navigation />
    </main>
  )
}

export default SearchArea
