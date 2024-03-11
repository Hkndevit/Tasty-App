import './SearchResults.css'
import Navigation from '../../components/Navigation/Navigation'
import SearchHeadline from '../../components/SearchHeadline/SearchHeadline'
import Search from '../../components/Search/Search'

const SearchResults = () => {
  return (
    <main>
      <h1>SearchResults</h1>
      <SearchHeadline />
      <Search />
      <Navigation />
    </main>
  )
}

export default SearchResults
