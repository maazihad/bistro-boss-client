import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
      });
   };
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         console.log("Current user is : ", currentUser);

         //=================get and set token ==jwt
         if (currentUser) {
            axios.post('http://localhost:5333/jwt', { email: currentUser.email })
               .then(data => {
                  localStorage.setItem('access-token', data.data.token);
                  setLoading(false);
               });
         }
         else {
            localStorage.removeItem('access-token');
         }
      });
      return () => {
         return unsubscribe;
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      googleSignIn,
      githubSignIn,
      updateUserProfile,
      logOut

   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;