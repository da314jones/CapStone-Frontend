import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
    signInWithPopup(auth, googleProvider).then((res) => {
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
  };

  export const signOut = async () =>{
    try {
      await auth.signOut()
    } catch(err) {
      console.log(err)
    }
  }