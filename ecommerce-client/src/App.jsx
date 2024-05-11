import { Header, Login, ProductPage, Signup } from "./components"
import Home from "./pages/Home"
// import Template from "./pages/Template";
import { Outlet } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Template from "./pages/Template";

const router= createBrowserRouter([
  {
    path:"",
    element:<Template/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"/product/:id",
      element:<ProductPage/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]
  }
])

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App

