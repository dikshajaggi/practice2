import { useState } from "react"
import './App.css';
import Main from "./components/Main";
import Specific from "./components/Specific"
import About from "./components/About"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { userContextProvider, userContext } from "./Utils/UserContext"


function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/rest/:id",
      element: <Specific />
    },
    {
      path: "/about",
      element: <About />
    }
  ])

  const [user, setUser] = useState("diksha")
  return (
    <div>
      <userContext.Provider value={{
        user,
        setUser
      }}>
        <RouterProvider router={appRoutes} />
      </userContext.Provider>
    </div>
  );
}

export default App;
