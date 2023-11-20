import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"


import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {

      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    })
  }

  useEffect(()=> {

    onAuthStateChanged(auth, (user) => {
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
  },[])
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between overflow-hidden">
      <img 
      className="w-44 rounded-lg "
      src=" https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940 "
       alt="logo" />
      {user && (<div className='p-2 '>
          <img className="w-12 h-12  rounded-lg "
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
      <button className="font-bold text-white" onClick={handleSignOut}>
        (Sign Out)
      </button>
    </div>)}
    </div>
   
    
  )
}

export default Header
