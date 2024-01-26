import { useEffect, useRef, useState } from "react";
import "../css/navbar.css";
import { Search } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { updateData } from "../services/database";

const Navbar = ({ navColor, userID = "" }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(() => navColor);
  console.log(
    "userID navbar: ",
    userID,
    "\nnavColor: ",
    navColor,
    "\nshow: ",
    show
  );

  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const avatarRef = useRef();

  const transitionNavbar = () => {
    setShow(window.scrollY > 100 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
  }, []);

  const handleDropdown = () => {
    if (avatarDropdown) {
      avatarRef.current.style.display = "none";
    } else {
      avatarRef.current.style.display = "block";
    }
    setAvatarDropdown(!avatarDropdown);
  };

  const handleLogout = async () => {
    const logoutResult = await updateData(userID, { loggedIn: false });
    if (logoutResult) navigate("/login");
  };

  return (
    <>
      <div className={`nav ${show && "nav--black"}`}>
        <Link to={{ pathname: `/home`, search: `?id=${userID}` }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix icon"
            className="nav__logo"
          />
        </Link>
        <div className="nav__contents">
          <div className="nav__list">
            <ul className="list">
              <li className="nav__list-item">
                <NavLink
                  to={{ pathname: `/home`, search: `?id=${userID}` }}
                  className="navlink--item"
                >
                  {" "}
                  My List
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to={{ pathname: `/home`, search: `?id=${userID}` }}
                  className="navlink--item"
                >
                  {" "}
                  Movies
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to={{ pathname: `/home`, search: `?id=${userID}` }}
                  className="navlink--item"
                >
                  {" "}
                  Tv shows
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav__icons">
            <div className="searchBox">
              {/* <input
                type="text"
                className="input input__search"
                id="search"
                placeholder="search"
              /> */}
              <Search
                color="#8a8a8a"
                className="icon icon--small"
                htmlFor="search"
              />
            </div>
            <div className="avatar" onClick={handleDropdown}>
              <img
                className="icon--avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
              />
              <div className="avatar__dropdown" ref={avatarRef}>
                <Link to="/home" className="avatar__dropdown--link">
                  <div className="avatar__dropdown--list avatar__dropdown--1">
                    Account
                  </div>
                </Link>
                {/* <Link to="" className="avatar__dropdown--link"> */}
                <div className="avatar__dropdown--list " onClick={handleLogout}>
                  Logout
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
