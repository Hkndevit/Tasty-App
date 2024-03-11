import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import Random from '../../components/Random/Random'

const Home = () => {
  return (
    <main className='home'>
      <h1>Home</h1>
      <Search />
      <Random />
      <Categories />
      <Navigation />
    </main>
  )
}

export default Home
