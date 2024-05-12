import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoEye, GoEyeClosed } from "react-icons/go";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    // const notify = () => toast("Wow so easy!")

  const [error, setError] = useState();
  const [showPassord, setShowPassord] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError();

    let email = e.target.email.value;
    let password = e.target.password.value;

    let errorCheck = {};

    if (email == "") {
      errorCheck["email"] = "the field is required.";
    }
    if (password == "") {
      errorCheck["password"] = "the field is required.";
    }

    if (Object.keys(errorCheck).length === 0) {
      console.log("No error frontend");
      console.log( email, password);
      axios
        .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
          
          email,
          password
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("access_token",response.data.access_token) 
        })
        .catch((error) => {
            console.log(error)
            console.log(error.response?.data.msg)
            toast.error(error.response?.data.msg)
        //   console.log(error.response.data.errors);

        //   let berror = error.response.data.errors;
        //   let err = {};
        //   for (let i of berror) {
        //     // console.log(i)
        //     err[i.param] = i.msg;
        //   }
        //   console.log(err);
        //   setError(err);
        });
    } else {
      console.log("error frontend", errorCheck);
      setError(errorCheck);
    }
  };

  const handleOnChange = (e) => {
    // console.log(e.target.name)
    setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
  };
  const toggleEye = (e) => {
    e.preventDefault();
    setShowPassord(!showPassord);
  };

  return (
    <div className="container mt-24 flex justify-center">
      <div className="flex w-full max-w-[544px] flex-col items-center p-14 shadow-lg">
        <span className="font-josefin text-[32px] ">Login</span>
        <span className="mb-9 text-sub-text">
          Please login using account detail bellow.
        </span>
        <form className="max-w-432 w-full" onSubmit={handleSubmit}>
          <div className="max-w-432 mb-8 space-y-8 ">
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Email Address"
              className="w-full rounded border border-[#C2C5E1] p-2 "
            />
            <span className="text-red-700">{error?.email}</span>

            <div className="relative">
              <input
                type={showPassord ? "text" : "password"}
                onChange={handleOnChange}
                name="password"
                placeholder="Password"
                className=" w-full rounded border border-[#C2C5E1] p-2"
              />
              <button className="absolute top-1/2 right-4 -translate-y-1/2 " onClick={toggleEye}>
                {showPassord ? <GoEye /> : <GoEyeClosed />}
              </button>
            </div>

            <span className="text-red-700">{error?.password}</span>
          </div>
          <button className="w-full  max-w-[544px] rounded bg-secondary py-2 font-josefin font-bold text-white">
            Login
          </button>
        </form>
        <span className="mt-7 text-sub-text">
          Don’t have an account yet?{" "}
          <Link
            to={"/signup"}
            className="cursor-pointer underline  hover:text-secondary"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}


//dovogetyj@mailinator.com
// Laborum Aut ex aliq


// qipire@mailinator.com
// Consectetur nihil i