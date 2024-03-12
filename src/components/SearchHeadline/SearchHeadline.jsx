import { Link } from "react-router-dom";
import "./SearchHeadline.css";

const SearchHeadline = () => {
  return (
    <div className="search-headline">
      <Link to="/">
        <img src="/images/Arrow - Left.svg" alt="" />
      </Link>
      <div className="search-headline__centered">
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default SearchHeadline;
