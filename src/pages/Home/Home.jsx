import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <main className="home">
      <h1>Home</h1>
      <Categories />
      <Navigation />
    </main>
  )
}

export default Home
