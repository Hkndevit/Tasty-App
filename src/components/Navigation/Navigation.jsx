import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <NavLink className="footer__links" to="/home">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.15722 20.7714L9.13797 18.5618C9.13796 17.7818 9.77388 17.148 10.5618 17.1428H13.4478C14.2395 17.1428 14.8813 17.7781 14.8813 18.5618L14.9005 20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09052 13.8896H14.9097"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <NavLink className="footer__links" to="/search/results">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.7666"
              cy="11.7664"
              r="8.98856"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.0183 18.4849L21.5423 21.9997"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <a href="#" className="footer__links" to="/about">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.37187 9.59832C0.298865 6.24832 1.55287 2.41932 5.06987 1.28632C6.91987 0.689322 8.96187 1.04132 10.4999 2.19832C11.9549 1.07332 14.0719 0.693322 15.9199 1.28632C19.4369 2.41932 20.6989 6.24832 19.6269 9.59832C17.9569 14.9083 10.4999 18.9983 10.4999 18.9983C10.4999 18.9983 3.09787 14.9703 1.37187 9.59832Z"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 4.7002C15.57 5.0462 16.326 6.0012 16.417 7.1222"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#" className="footer__links">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8479 15.3462C8.98029 15.3462 5.67743 15.931 5.67743 18.2729C5.67743 20.6148 8.95933 21.2205 12.8479 21.2205C16.7155 21.2205 20.0174 20.6348 20.0174 18.2938C20.0174 15.9529 16.7365 15.3462 12.8479 15.3462Z"
              stroke="#97A2B0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8479 12.0059C15.386 12.0059 17.4432 9.94779 17.4432 7.40969C17.4432 4.8716 15.386 2.81445 12.8479 2.81445C10.3098 2.81445 8.25174 4.8716 8.25174 7.40969C8.24316 9.93922 10.287 11.9973 12.8155 12.0059H12.8479Z"
              stroke="#97A2B0"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Navigation;
