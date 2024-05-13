import { AddProduct, Header, Login, PageNotFound, ProductPage, Signup } from "./components"
import Home from "./pages/Home"
// import Template from "./pages/Template";
import { Outlet } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Template from "./pages/Template";
import MyForm from "./components/Myform";
import { useEffect, useState } from "react";

import axios from "axios";

import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import ProtectedRoute from "./components/ProtectedRoute";

import { SELLER,BUYER } from "./components/role";
import SellerProducts from "./components/seller/SellerProducts";

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
    // {
    //   path:"/addProduct",
    //   element:<AddProduct/>
    // },
    {
      path:"*",
      element:<PageNotFound/>
    }
  ]
  },
  {
    path:"sellers",
    element:<ProtectedRoute role={SELLER}/>,
    children:[
      {
        path:"",
        element:<SellerProducts/>
      },
      {
        path:"addProduct",
        element:<AddProduct/>
      }
    ]
  }
])

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem("access_token")
  const dispatch = useDispatch()

  useEffect(() => {
    if (token){
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user",
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then((response)=>{
        console.log("get user response",response.data)
        dispatch(setReduxUser(response.data))
        setIsLoading(false)
      })
      .catch((err)=>{
        setIsLoading(false)
      })
    }
    else{
      setIsLoading(false)
    }
  
  })
  

  
  return (
    <>
     {
      isLoading?(<div> Loading .............</div>):(<RouterProvider router={router} />)
    }
    
    
    </>

  )
}

export default App

