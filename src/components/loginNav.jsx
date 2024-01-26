import { Link } from "react-router-dom";
import "../css/login.css";

const LoginNav = () => {
  return (
    <div className="login__nav">
      <Link to="/login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix icon"
          className="nav__logo login__logo"
        />
      </Link>
    </div>
  );
};

export default LoginNav;
