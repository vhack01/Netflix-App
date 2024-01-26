import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import Rows from "./rows";
import { checkLoginStatus } from "../services/database";
import NavContext from "../context/navContext";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const [userID, setUserID] = useState();

  const currentAuth = async () => {
    const hasId = query.has("id");
    if (!hasId) navigate("/not-found");
    else {
      const id = query.get("id");
      setUserID(id);

      const loginResult = await checkLoginStatus(id);
      // console.log("loginResult: ", loginResult);
      if (loginResult === null) navigate("/not-found");
      else {
        // if (loginResult.loggedIn === false) navigate("/login");
      }
    }
  };

  useEffect(() => {
    currentAuth();
  }, []);

  return (
    <NavContext.Provider value={userID}>
      <Navbar navColor={false} userID={userID} />
      <Banner />
      <Rows />
    </NavContext.Provider>

    // <Routes>
    //   <Route path="/" element={<Navbar />}>
    //     <Route path="/" element={<Navigate to="/home" />} />
    //     <Route path="home/:id" element={<HomeComponents />} />
    //     <Route path="watch/:movie_id" element={<Watch />} />
    //     <Route path="*" element={<Error />} />
    //   </Route>
    // </Routes>
  );
};

export default Home;
