import { createContext } from "react";

const username = "Shubham"
const userContext = createContext(username)

const userContextProvider = userContext.Provider

export { userContext, userContextProvider }