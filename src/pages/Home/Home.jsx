import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import Categories from '../../components/Categories/Categories'
import Random from '../../components/Random/Random'
import { FilterHome } from '../../components/FilterHome/FilterHome'
import { SearchHome } from '../../components/SearchHome/SearchHome'

const Home = () => {
  return (
    <main className='home'>
      <SearchHome />
      <Random />
      <FilterHome />
      <Categories />
      <Navigation />
    </main>
  )
}

export default Home
