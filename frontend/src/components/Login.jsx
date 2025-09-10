import React, { useState ,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { API_PATHS } from '../utils/apiPath';
import axiosInstance from "../utils/axiosInstance"
import { UserContext } from '../context/UserContext';
import { validateEmail } from '../utils/helper';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const[loadingbtn , setLoadingbtn] = useState(false);
  const navigate = useNavigate();
  const{updateUser} = useContext(UserContext);
  const handleLogin = async(e) => {
    e.preventDefault()
    if(!email || !password )
    {
       setError("All fields are required ");
       return ;
     }
    if(!validateEmail(email)){
      setError("Please Enter a valid Email");
      return ;
    }
    try{
       setLoadingbtn(true);
        const response  = await axiosInstance.post(API_PATHS.Auth.LOGIN, {email,password});
        const {token , user:userData} = response.data;
        if(token)
        {
          localStorage.setItem("token",token);
          updateUser(userData);
          // console.log(user);  // here need change ->  update the user data in user context 
          navigate("/");
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again.");
        }    
     }finally{
      setLoadingbtn(false);
     }
}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Welcome Back 💜
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-md transition duration-300"
             disabled={loadingbtn}
          >
              {loadingbtn ? (
                <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{' '}
          <Link
            to="/signup"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Login


