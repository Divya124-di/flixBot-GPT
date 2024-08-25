import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {
  const [isSignUp , setIsSignUp] = useState(0);
  const [errorMessage, seterrorMessage] = useState()
  const email = useRef(null);
  const password = useRef(null);
    const toggleSignup = () => {
     setIsSignUp(!isSignUp);
    };

    const HandleButtonClick =()=>{
     const msg = checkValidateData(email.current.value, password.current.value);
     console.log(msg);
     seterrorMessage(msg);
     
   //console.log(email, password);
   
    }
  
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute object-fill"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="img"
        />
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" p-8 absolute bg-black w-3/12 flex flex-col gap-2  text-white rounded-lg bg-opacity-80 lg:p-12 sm:p-6 "
        >
          <h1 className="font-bold text-3xl my-2">
            {isSignUp ? "Sign in" : "Sign up"}
          </h1>
          {!isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2  bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 my-2  bg-gray-700 rounded-lg"
          />
          
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2  bg-gray-700 rounded-lg"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-700 p-2 my-2 rounded-lg"
            onClick={HandleButtonClick}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignup}>
            {isSignUp
              ? " New to Netflix? sign up"
              : "Already Registered Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login