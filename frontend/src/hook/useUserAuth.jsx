// import { API_PATHS } from "../utils/apiPath";
// import { UserContext } from "../context/UserContext";
// import React, { useContext, useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance";

// const useUserAuth = () => {
  // const { user, updateUser , clearUser , setLoading } = useContext(UserContext);

//   useEffect(() => {
//     if (user) {
//       setLoading(false);
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       setLoading(false);
//       clearUser ();
//       return;
//     }

//     let isMounted = true;

//     const fetchUserInfo = async () => {
//       setLoading(true);
//       try {
//         const response = await axiosInstance.get(API_PATHS.Auth.GET_INFO);
//         if (isMounted && response.data) {
//           updateUser (response.data);
//         }
//       } catch (error) {
//         console.error("failed to fetch user Info ", error);
//         if (isMounted) {
//           clearUser ();
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserInfo();

//     return () => {
//       isMounted = false;
//     };
//   }, [user, updateUser , clearUser , setLoading]);
// };

// export default useUserAuth;