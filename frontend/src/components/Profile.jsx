// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';
// import { LuPlus } from "react-icons/lu";

// const Profile = ({ onCreateArticle }) => {
//   const { user } = useContext(UserContext);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
//       <div className="w-full max-w-lg bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-blue-100 text-center">
        
//         {/* Profile Picture Placeholder */}
//         <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 shadow-md flex items-center justify-center">
//           <span className="text-gray-500">Profile Photo</span>
//         </div>

//         <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
//           Profile
//         </h2>

//         <div className="space-y-3 text-lg text-gray-700">
//           <div>
//             <span className="font-semibold text-blue-700">Name:</span> {user.fullname}
//           </div>
//           <div>
//             <span className="font-semibold text-blue-700">Email:</span> {user.email}
//           </div>
//         </div>

//         <button
//           onClick={onCreateArticle}
//           className="mt-8 flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-md transition duration-300"
//         >
//           <LuPlus className="text-lg" />
//           Create Article
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useContext, useEffect, useState } from "react";
// import { LuPlus } from "react-icons/lu";
// import { UserContext } from "../context/UserContext";
// import { API_PATHS } from "../utils/apiPath";
// import axiosInstance from "../utils/axiosInstance";

// const Profile = ({ onCreateArticle }) => {
//   const { user } = useContext(UserContext);
//   const [articleCount , setArticleCount] = useState(0);

// const countArticle =async()=>{
//   try{
//     const response = await axiosInstance.get(API_PATHS.News.COUNT);
//     if(response.data)
//       setArticleCount(response.data);
//     return ;
//   }catch(error){
//     console.error("Error in counting article ", error);
//     return ;
//   }
// }

// useEffect(()=>{
//   countArticle();
//   return ()=>{};
// },[]);

//   return (
//     <div className=" flex flex-col items-center text-center h-full   ">
//       {/* Profile Image Placeholder */}
//       <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
//           <img
//             src={user?.profileImageUrl || ""}
//             alt="Profile Image"
//             className="w-35 h-35 bg-slate-400 rounded-full"
//           />
//       </div>

//       {/* User Info */}
//       <h2 className="text-xl font-bold text-purple-700">{user.fullname}</h2>
//       <p className="text-gray-600 text-sm">{user.email}</p>

//       {/* Create Article Button */}
//       <button
//         onClick={onCreateArticle}
//         className="mt-6 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-md transition duration-300"
//       >
//         <LuPlus className="text-lg" />
//         Create Article
//       </button>
//      <div className="mt-20 border p-5 h-20 w-full  text-lg color-pink ">
//       {articleCount ===0  && <h1>No article posted  yet </h1>}
//         {articleCount!==0  && <div>
     
//         <h1>Article Posted </h1>
//         <h1> {articleCount}</h1>
//       </div>}
//     </div>
//     </div>
//   );
// };


// export default Profile;

import React, { useContext, useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { UserContext } from "../context/UserContext";
import { API_PATHS } from "../utils/apiPath";
import axiosInstance from "../utils/axiosInstance";

const Profile = ({ onCreateArticle }) => {
  const { user } = useContext(UserContext);
  const [articleCount, setArticleCount] = useState(0);

  const countArticle = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.News.COUNT);
      if (response.data) setArticleCount(response.data);
    } catch (error) {
      console.error("Error in counting article ", error);
    }
  };

  useEffect(() => {
    countArticle();
  }, []);

  return (
    <div className="flex flex-col items-center text-center h-full">
      {/* Profile Image */}
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        <img
          src={user?.profileImageUrl || ""}
          alt="Profile"
          className="w-32 h-32 bg-slate-400 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* User Info */}
      <h2 className="text-xl font-bold text-purple-700">{user.fullname}</h2>
      <p className="text-gray-600 text-sm">{user.email}</p>

      {/* Create Article Button */}
      <button
        onClick={onCreateArticle}
        className="mt-6 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-md transition duration-300"
      >
        <LuPlus className="text-lg" />
        Create Article
      </button>

      {/* Article Count */}
      <div className="mt-20 w-full p-5 rounded-2xl shadow-inner bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        {articleCount === 0 ? (
          <h1 className="text-gray-600 font-medium">No articles posted yet</h1>
        ) : (
          <div>
            <h1 className="text-lg font-semibold text-purple-700">Articles Posted</h1>
            <h1 className="text-3xl font-extrabold text-blue-700">{articleCount}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

