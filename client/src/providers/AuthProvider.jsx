import React from "react";
import { createContext,useState,useEffect} from "react";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
 export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

   const verifyEmail = () => {
     setLoading(true);
     return sendEmailVerification(auth.currentUser);
   };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   const updateUserProfile = (name, photo) => {
     setLoading(true);
     return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photo,
     });
   };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setLoading,
    loading,
    createUser,
    loginUser,
    logOut,
    logInWithGoogle,
    resetPassword,
    verifyEmail,
    logInWithFacebook,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}  >{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
