import React from 'react'
import Header from './Header'

const Login = () => {
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
      <div className='flex flex-col min-h-screen justify-center items-center'>
        <form className="absolute bg-black w-3/12 flex flex-col gap-2 h-3/6 lg:p-12 sm:p-6">
          <input
            type="text"
            placeholder="Email"
            className="p-2 m-2  bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2  bg-gray-700"
          />
          <button type="submit" className="bg-red-700 p-2 m-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login