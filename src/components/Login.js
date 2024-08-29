import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { AVATAR_LOGO } from "../utils/constants";

const Login = () => {
 
  const [isSignIn, setIsSignIn] = useState(0);
  const [errorMessage, seterrorMessage] = useState();
 const dispatch = useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignup = () => {
    setIsSignIn(!isSignIn);
  };

  const HandleButtonClick = () => {
    const msg = checkValidateData(email.current.value, password.current.value);
    console.log(msg);
    seterrorMessage(msg);
    if (msg) return null;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage();
            });
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn....
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="background"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-80 p-6 sm:p-8 lg:p-12 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 flex flex-col gap-4 text-white rounded-lg"
        >
          <h1 className="font-bold text-2xl sm:text-3xl my-2">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
            ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 my-2 bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 rounded-lg"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-700 p-2 my-2 rounded-lg hover:bg-red-800"
            onClick={HandleButtonClick}
          >
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignup}>
            {isSignIn
              ? " New to Netflix? Sign up"
              : "Already Registered? Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
