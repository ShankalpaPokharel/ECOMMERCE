import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet} from 'react-router-dom'
import Forbidden from './Forbidden'
import Login from './Login'
import SellerNav from './seller/SellerNav'

export default function ProtectedRoute({role}) {
    const user = useSelector((store)=>store.user.value)
    
    if (!user){
       return <Navigate to={"Login"}/>
    }
    if(user.role != role){
        return <><Forbidden/></>
    }
  return (
    <>
    <SellerNav/>
    <Outlet/>
    </>
  )
}
