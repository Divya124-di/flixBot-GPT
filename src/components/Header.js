import React, { useEffect } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
 const  navigate = useNavigate()
  const handleSignOut =()=>{
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
      navigate("/error");
        
        
      });
  }

   useEffect(() => {
    const  unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           })
         );
         navigate("/browse");
       } else {
         dispatch(removeUser());
         navigate("/");
       }
     });

     //unsubscribe when component unmounts
     return ()=> unsubscribe();
   }, []);
  return (
    <div className="z-10 p-4 absolute bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-24 sm:w-32 mx-4 sm:mx-6"
        src={LOGO}
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
