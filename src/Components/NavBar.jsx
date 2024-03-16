import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import {
  signInWithGoogle,
  signOut
} from "../Services/firebase"
import './NavBar.css'

export default function NavBar() {
const [dropDown, setDropdown] = useState(false);
const user = useContext(AuthContext);
const navigate = useNavigate();

const handleSignIn = async () => {
  try {
    await signInWithGoogle();
    setDropdown(false);
    navigate('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const handleSignOut = async () => {
  try {
    await signOut();
    setDropdown(false);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

useEffect(() => {
  if (user) {
    navigate('dashboard');
  } else {
    navigate('/');
  }
}, [user, navigate])

const handleToggleDropdown = () => {
  setDropdown(!dropDown);
};

return (
  <div className='navbar-container'>
    <img className='brand-logo' src={"/tidbitsBrandLogo.png"} alt="Tidbits Brand Logo"/>   
    <div className='profile-menu'>
    <img
          src={user ? user.photoURL : "/profileIcon.jpg"}
          alt={user ? "Profile Picture" : "Profile Icon"}
          onClick={handleToggleDropdown}
        />
      {dropDown && (
          <ul className='dropdown'>
            {user ? (
              <li><button onClick={signOut}>Sign Out</button></li>
            ) : (
              <>
                <li><button onClick={signInWithGoogle}>Sign Up</button></li>
                <li><button href="/login">Login</button></li>
              </>
            )}
          </ul>
        )}
    </div>
  </div>
);
}

