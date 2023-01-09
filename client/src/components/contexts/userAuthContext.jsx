import { createContext, useContext, useState } from "react";
// import {signInWithPopup } from 'firebase'
import { signInWithGoogle, auth } from "../../firebase";
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useEffect } from "react";
 
const userAuthContext = createContext({});

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});

    function googleSignIn(){
      const googleauthprovider = new GoogleAuthProvider();
      
      return signInWithPopup(auth, googleauthprovider);

    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser);
        setUser(currentUser);
      })

      return () => {
        unsubscribe();        
      }
    }, [])
    return <userAuthContext.Provider value={{user, googleSignIn}}> {children} </userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}