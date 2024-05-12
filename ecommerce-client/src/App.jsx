import { Header, Login, PageNotFound, ProductPage, Signup } from "./components"
import Home from "./pages/Home"
// import Template from "./pages/Template";
import { Outlet } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Template from "./pages/Template";
import MyForm from "./components/Myform";

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
    },
    {
      path:"/myform",
      element:<MyForm/>
    },
    {
      path:"*",
      element:<PageNotFound/>
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

