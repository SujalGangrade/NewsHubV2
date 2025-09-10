import React, { useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate();
  const{clearUser} = useContext(UserContext);
  useEffect(()=>{
    clearUser();
    localStorage.removeItem("token")
    navigate("/");
  },[clearUser,navigate]);
  return null;
  
}

export default Logout
