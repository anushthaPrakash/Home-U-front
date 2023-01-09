import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import { useUserAuth } from './contexts/userAuthContext';

const Protected = ({children}) => {

    // authenticate
    const {user} = useUserAuth();
    if(!user){
      return <Navigate to={'/login'} />;
    }

  return children;
}

export default Protected