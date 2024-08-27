import React from "react";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
 const  navigate = useNavigate()
  const handleSignOut =()=>{
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
      navigate("/error");
        
        
      });
  }
  return (
    <div className="z-10 p-4 absolute bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-24 sm:w-32 mx-4 sm:mx-6"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
     {user  && (<div className="flex m-2">
        <img
          className="w-11 h-11 rounded-full mr-2"
          src={user?.photoURL}
          alt="userpic"
        />

        <button
          onClick={handleSignOut}
          className=" m-1 p-2 bg-red-500 text-white rounded-lg "
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
