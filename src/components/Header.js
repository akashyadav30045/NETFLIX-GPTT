import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import { toggleGptSearchView } from '../utils/gptSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {

      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    })
  }

  useEffect(()=> {

    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({ uid:uid , 
          email:email, 
          displayName:displayName , 
          photoURL:photoURL }))
          navigate("/browse")

      } else {
        dispatch(removeUser());
        navigate("/")

      }
    });
    // unsubscribe when componet unmounts 
    	return () => unsubscribe();

  },[]);

  const handleGptSearchClick = () => {
    // Toggle GPT search button.
    dispatch(toggleGptSearchView()); 
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between  flex-col md:flex-row overflow-hidden">
      <img 
        className=" w-44 mx-auto md:mx-0 rounded-lg "
        src={LOGO}
        alt="logo" />
      {user && (
        <div className=' flex p-2 justify-between align-items'>
          { showGptSearch && 
            <select className="p-2 bg-gray-900 m-2  text-white " onChange={handleLanguageChange}> 
            {SUPPORTED_LANGUAGES.map((lang) => (
            <option key = {lang.identifier} value={lang.identifier}>
              {lang.name}
            </option> ))}
          </select>}
         <button className="py-2 px-2 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>
          {showGptSearch? "Homepage" : "GPT Search"}
         </button>
            <img className="hidden md:block w-12 h-12  rounded-lg "
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
          <button className="font-bold text-white" onClick={handleSignOut}>
        (Sign Out)
        </button>
    </div>)}
    
    </div>
   
    
  )
}

export default Header
