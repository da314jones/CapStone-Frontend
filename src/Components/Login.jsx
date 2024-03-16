import React, { useContext, useEffect, useState } from "react";
import { useAuth, AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import {
    signInWithGoogle,
    signOut
  } from "../Services/firebase"

  export const Login = () => {
    const user   = useContext(AuthContext);
    const navigate = useNavigate();

     useEffect(() => {
      if (user) {
       navigate("/loggedIn");
      }
    }, [user, navigate]);

    const handleLogin = async () => {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error('SignIn Failed');
      }
    };

    const handleSignOut = async () => {
      try {
        await signOut();
        navigate('/');
      } catch (error) {
        console.error('SignOut failed:', error);
      }
    };

      return (
      <div>
        <section>
          <div>
            <div> login works</div>
            <button onClick={handleLogin}>Sign in With google</button>
            <button onClick={handleSignOut}> sign out</button>
        </div>
        </section>
      </div>
    );
  };