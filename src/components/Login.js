import React, { useRef, useState   } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Login = () => {

  const navigate = useNavigate()  

  const[isSignInForm, setisSignInForm] = useState(true);
  const[errorMessage,seterrorMessage]  =useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data 
    // checkValidData;
    
    const Message = checkValidData(email.current.value,password.current.value)
    console.log(Message)
    seterrorMessage(Message);

    if(Message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        // const user = userCredential.user;
        // // updating the name of the user 
        // updateProfile(user, {
        //   displayName: name.current.value, 
        //   photoURL: "https://example.com/jane-q-user/profile.jpg"
        // }).then(() => {
        //   // Profile updated!
        //   // ...
        //   navigate("/browse");
        // }).catch((error) => {
        //   // An error occurred
        //   seterrorMessage(error.Message)
        //   // ...
        // });
        
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+ "-" + errorMessage)
        
        // ..
  });

      
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+ "-" + errorMessage)
      });
  
    }

  }

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
      <form 
        onSubmit={(e) => e.preventDefault()}
       className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg ">

      

        <h1 className="font-bold text-3xl py-5"  >  {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && ( <input type="text" placeholder=' Full Name ' className='p-4 my-4 w-full rounded-lg bg-gray-500 ' /> )}
        <input type="text" ref={email}
        placeholder='Email Addresss' className='p-4 my-4 w-full rounded-md bg-gray-500' />
        <input type="password"  ref={password}
        placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-slate-500' />
       

        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full "  onClick={ handleButtonClick}  >
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
