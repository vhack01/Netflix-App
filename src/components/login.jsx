import { useContext } from "react";
import Account from "./common/account";
import DataProvider from "../context/dataProvider";
const Login = () => {
  const userCred = useContext(DataProvider);
  // console.log("main login cred: ", userCred);
  return <Account pageName="Sign In" />;
};

export default Login;
