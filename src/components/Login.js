import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () =>{
      setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className=" absolute " >
        <img 
        src="
        https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="background-image" />
      </div>
      <form className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg ">

      

        <h1 className="font-bold text-3xl py-5"  >  {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && ( <input type="text" placeholder=' Full Name ' className='p-4 my-4 w-full rounded-lg bg-gray-500 ' /> )}
        <input type="text" placeholder='Email Addresss' className='p-4 my-4 w-full rounded-md bg-gray-500' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-slate-500' />
       


        <button className="p-4 my-6 rounded-lg bg-red-700 w-full "  onClick={toggleSignInForm}  >
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>


        <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm} >
          {
            isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now.. "
          }
        </p>
        
      </form>
    </div>
  )
}

export default Login
