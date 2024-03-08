import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Onboarding from '../src/pages/Onboarding/Onboarding'
import SearchArea from '../src/pages/SearchArea/SearchArea'
import SearchCategory from '../src/pages/SearchCategory/SearchCategory'
import SearchResults from '../src/pages/SearchResults/SearchResults'
import Details from '../src/pages/Details/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/onboarding"
          element={<Onboarding />}
        />
        <Route
          path="/search/area"
          element={<SearchArea />}
        />
        <Route
          path="/search/category"
          element={<SearchCategory />}
        />
        <Route
          path="/search/results"
          element={<SearchResults />}
        />
        <Route
          path="/details"
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
