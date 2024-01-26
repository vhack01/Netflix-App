import Navbar from "./navbar";
import "../css/error.css";
import { useLocation } from "react-router-dom";
import { set } from "firebase/database";

const Error = () => {
  const { state } = useLocation();
  console.log("state: ", state);
  return (
    <>
      <Navbar navColor={true} />
      <div className="error">
        <h2>Page Not found</h2>
      </div>
    </>
  );
};

export default Error;
