import './SearchHome.css'
import { Link } from 'react-router-dom'

export const SearchHome = () => {
  return (
    <Link className='home__search' to='search/results'>
      <form className='Home__Search'>
        <img src='/images/Search.svg' alt='' />
        <input type='text' placeholder='  Search' />
      </form>
    </Link>
  )
}
