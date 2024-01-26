import { createContext, useContext } from "react";
const UserContext = createContext();
UserContext.displayName = "UserContext";

export default UserContext;
