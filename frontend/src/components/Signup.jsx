import React, { useContext, useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { API_PATHS } from "../utils/apiPath";
import axiosInstance from "../utils/axiosInstance";
import { validateEmail } from '../utils/helper';
import uploadImage from '../utils/uploadImage';
import Input from './Input';
import ProfilePhotoSelector from './ProfilePhotoSelector';
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingbtn, setLoadingbtn] = useState(false);
  const[image ,setImage] = useState(null);
  const navigate = useNavigate();
  const {updateUser , user} = useContext(UserContext);
   
  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";
    if (!email || !password || !fullname || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (confirmPassword !== password) {
      setError("Confirm password and password must match");
      return;
    }
    if (password.length < 8) {
      setError("Password should be at least 8 characters long");
      return;
    }
    if(!validateEmail(email)){
         setError("Please Enter a valid Email");
         return ;
       }
      
    try {
      setLoadingbtn(true);
      if(image){
        const imageUploadRes = await uploadImage(image);
        profileImageUrl = imageUploadRes.imageUrl ||"";
      }
      const response = await axiosInstance.post(API_PATHS.Auth.REGISTER, { email, password, fullname, profileImageUrl });
      const { token, user:userData } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(userData);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoadingbtn(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Create Account ✨
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSignUp} className="space-y-5">

           <ProfilePhotoSelector image= {image} setImage={setImage} /> 
           <Input
            type="text"
            label="Full Name"
            placeholder="Enter your Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            required
          />
          <Input
            type="email"
            label="Email"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Confirm Password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
