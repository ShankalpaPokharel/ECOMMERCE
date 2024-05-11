import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoEye, GoEyeClosed } from "react-icons/go";

export default function Signup() {
    const [error, setError] = useState()
    const [showPassord, setShowPassord] = useState(true)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setError()
        let name = e.target.name.value
        let email = e.target.email.value
        let password = e.target.password.value
        let role = e.target.role.value

        let errorCheck = {}
        if (name==""){
            errorCheck["name"]="the field is required."
        }
        if (email==""){
            errorCheck["email"]="the field is required."
        }
        if (password==""){
            errorCheck["password"]="the field is required."
        }
        if (role==""){
            errorCheck["role"]="the field is required."
        }
        if(Object.keys(errorCheck).length === 0){
            console.log("No error frontend")
            console.log(name,email,password,role)
            axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup",{name,email,password,role})
            .then((response)=>{
                
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error.response.data.errors)
                
                let berror = error.response.data.errors
                let err ={}
                for (let i of berror){
                    // console.log(i)
                    err[i.param] = i.msg
                }
                console.log(err)
                setError(err)
               
            })
        }
        else{
            console.log("error frontend",errorCheck)
            setError(errorCheck)
        }

        
       
    }

    const handleOnChange = (e)=>{
        // console.log(e.target.name)
        setError((prevError) => ({...prevError, [e.target.name]:""}))
    }
    const toggleEye = (e) =>{
        e.preventDefault()
        setShowPassord(!showPassord)
    }

  return (
    <div className="container flex justify-center mt-24">
      <div className="flex max-w-[544px] flex-col items-center p-14 shadow-lg w-full">
        <span className="font-josefin text-[32px] ">Sign up</span>
        <span className="mb-9 text-sub-text">
        Create your Free Account
        </span>
        <form onSubmit={handleSubmit}>

        <div className="space-y-8 mb-8 max-w-432 ">

        
        <input
        name="name"
        onChange={handleOnChange}
          type="text"
          placeholder="Name"
          className="w-full rounded border border-[#C2C5E1] p-2"
        />
       
        <span className="text-red-700">{error?.name}</span>

        <input
          type="email"
          name="email"
          onChange={handleOnChange}
          placeholder="Email Address"
          className="w-full rounded border border-[#C2C5E1] p-2 "
        />
        <span className="text-red-700">{error?.email}</span>

        <div className=" relative">
        <input
          type={showPassord?"text":"password"}
          onChange={handleOnChange}
            name="password"
          placeholder="Password"
          className=" w-full rounded border border-[#C2C5E1] p-2"
        />
        <button className="absolute top-1/2 -translate-y-1/2  right-4" onClick={toggleEye}>{showPassord?<GoEye/>:<GoEyeClosed/>}</button>
        </div>
        
        <span className="text-red-700">{error?.password}</span>

        

        <select  onChange={handleOnChange} className="w-full rounded border border-[#C2C5E1] p-2  " name="role" id="">
            <option value="" selected >Choose the option</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
        </select>
        <span className="text-red-700">{error?.role}</span>
        </div>
        <button  className="w-full  max-w-[544px] rounded bg-secondary py-2 font-josefin font-bold text-white">
          Sign up
        </button>
        </form>
        <span className="mt-7 text-sub-text">
          Already have an Account? <Link to={"/login"}  className="underline hover:text-secondary  cursor-pointer">Login</Link>
        </span>
      </div>


      
      
    </div>
  );
}
