import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Onboarding from "../src/pages/Onboarding/Onboarding";
import SearchArea from "../src/pages/SearchArea/SearchArea";
import SearchCategory from "../src/pages/SearchCategory/SearchCategory";
import SearchResults from "../src/pages/SearchResults/SearchResults";
import Details from "../src/pages/Details/Details";
import Loading from "./pages/Loading/Loading";
import { areaContext, categoryContext } from "./context/Context";
import { useEffect, useState } from "react";

function App() {
  // Text Content from Area Component in Home Page to FilterArea Component in Search Area Page
  const [areaValue, setAreaValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <categoryContext.Provider value={{ categoryValue, setCategoryValue }}>
      <areaContext.Provider value={{ setAreaValue, areaValue }}>
        {loading ? (
          <BrowserRouter>
            <Routes>
              <Route path="/loading" element={<Loading />} />
              <Route path="/" element={<Onboarding />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search/area" element={<SearchArea />} />
              <Route path="/search/category" element={<SearchCategory />} />
              <Route path="/search/results" element={<SearchResults />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <Loading />
        )}
      </areaContext.Provider>
    </categoryContext.Provider>
  );
}

export default App;
