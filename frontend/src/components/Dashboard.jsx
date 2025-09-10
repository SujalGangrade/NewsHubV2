//version 1.1

// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import Loader from "./Loader";
// import Profile from "./Profile";
// import ArticleList from "./ArticleList";
// import Modal from "./Modal";
// import AddArticleForm from "./AddArticleForm";

// const Dashboard = () => {
//   const { user, loading } = useContext(UserContext);
//   const [openCreateModal, setOpenCreateModal] = useState(false);

//   useEffect(() => {
//     if (user) console.log("User Data:", user.fullname);
//   }, [user]);

//   if (loading) return <Loader />;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex mt-15">
//       {/* Sidebar/Profile */}
//       <aside className="hidden md:flex md:w-1/4 lg:w-1/5 bg-white/90 backdrop-blur-lg border-r border-purple-200 shadow-xl p-6 flex-col">
//         <Profile onCreateArticle={() => setOpenCreateModal(true)} />
//       </aside>

//       {/* Main Section */}
//       <main className="flex-1 p-6">
//         <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
//           Articles 📚
//         </h1>
//         <ArticleList />
//       </main>

//       {/* Modal for Creating Article */}
//       <Modal
//         isOpen={openCreateModal}
//         onClose={() => setOpenCreateModal(false)}
//         title="Create New Article"
//       >
//         <AddArticleForm onAdd={() => setOpenCreateModal(false)} />
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;


// version 1.2


// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import Loader from "./Loader";
// import Profile from "./Profile";
// import ArticleList from "./ArticleList";
// import Modal from "./Modal";
// import AddArticleForm from "./AddArticleForm";
// import { FiMenu, FiX } from "react-icons/fi";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPath";
// import DeleteAlert from "./DeleteAlert";
// import EditArticleForm from "./EditArticleForm";
// const Dashboard = () => {
//   const { user, loading } = useContext(UserContext);
//   const [openCreateModal, setOpenCreateModal] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const[userArticles ,setUserArticles] = useState(null);
//   const[fetching ,setFetching ] = useState(false);
//   const [openDeleteModal ,setOpenDeleteModal] = useState({show:false , data:null});
//   const[openEditModal , setOpenEditModal] =useState({show:false , data:null});

//   useEffect(() => {
//     if (user) console.log("User Data:", user.fullname);
//   }, [user]);
  
//   const fetchArticles = async()=>{
//     if(fetching) return ;
//       try{
//         setFetching(true);
//         const response = await axiosInstance.get(API_PATHS.News.GET_USER_ARTICLES);
//         if(response.data)
//             setUserArticles(response.data);
//       }catch (error) {
//       console.log("Something Went wrong .Please try again ", error);
//     } finally {
//       setFetching(false);
//     }
//   }
//   useEffect(()=>{
//         fetchArticles();
//         return ()=>{};
//       },[]);

//  const handleDelete = async(id)=>{
//     try{
//       const response = await axiosInstance.delete(API_PATHS.News.DELETE_ARTICLE(id));
//       setOpenDeleteModal({show:false , data:null});
//       fetchArticles();
//     }catch (error) {
//       console.error(
//         "Erorr in deleting Article :",
//         error.response?.data?.message || error.message
//       );
//     }
//  }
 
//  const handleUpdate = async(article)=> {
//       try{
//         const id = article._id;
//         const response = await axiosInstance.put(API_PATHS.News.EDIT_ARTICLE(id), article);
//         setOpenEditModal({show:false , data:null});
//        fetchArticles();
//         return ;
//       }catch (error) {
//       console.error(
//         "Erorr in updating Article :",
//         error.response?.data?.message || error.message
//       );
//     }
// }
   

//   if (loading) return <Loader />;

//   return (
//     <div className="mt-15 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex">
//       {/* Sidebar for Desktop */}
//       <aside className="hidden md:flex md:w-1/4 lg:w-1/5 bg-white/90 backdrop-blur-lg border-r border-purple-200 shadow-xl p-6 flex-col">
//         <Profile onCreateArticle={() => setOpenCreateModal(true)} />
//       </aside>


//       {/* Sidebar Drawer for Mobile */}

//       <div
//         className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity mt-20 ${
//           sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setSidebarOpen(false)}
//       />
//       <aside
//         className={`fixed top-15 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 md:hidden shadow-lg p-6 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setSidebarOpen(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           <FiX size={24} />
//         </button>

//         <Profile onCreateArticle={() => setOpenCreateModal(true)} />
//       </aside>

//       {/* Main Section */}
//       <main className="flex-1 p-6">
//         {/* Mobile Menu Button */}
//         <div className="md:hidden mb-4">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 bg-white rounded-md shadow-md"
//           >
//             <FiMenu size={24} />
//           </button>
//         </div>

//         <h1 className="text-3xl font-extrabold text-purple-700 mb-6 ">
//          Your Dashboard
//         </h1>
//         <ArticleList articles ={userArticles} 
//           onDelete={(id)=>{setOpenDeleteModal({show:true, data:id })}}
//           onEdit={(article)=>{setOpenEditModal({ show:true , data:article})}}
//         />
//       </main>

//       {/* Modal for Creating Article */}
//       <Modal
//         isOpen={openCreateModal}
//         onClose={() => setOpenCreateModal(false)}
//         title="Create New Article"
//       >
//         <AddArticleForm onAdd={() => setOpenCreateModal(false) } fetchArticles={fetchArticles} />
//       </Modal>
//         {/* Modal for Deleting Article */}
//        <Modal
//         isOpen={openDeleteModal.show}
//         onClose={() => setOpenDeleteModal({show:false , data:null})}
//         title=" Delete Article"
//       >
//        <DeleteAlert onDelete={()=>{handleDelete(openDeleteModal.data)}} />
//       </Modal>

//       {/* Modal for Editing Article */}
//       <Modal
//        isOpen={openEditModal.show}
//        onClose={()=>setOpenEditModal({show:false , data:null})}
//       title="Update Article"
//       >
//         <EditArticleForm article={openEditModal.data} onSubmit={handleUpdate} />
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { API_PATHS } from "../utils/apiPath";
import axiosInstance from "../utils/axiosInstance";
import AddArticleForm from "./AddArticleForm";
import ArticleList from "./ArticleList";
import DeleteAlert from "./DeleteAlert";
import EditArticleForm from "./EditArticleForm";
import Loader from "./Loader";
import Modal from "./Modal";
import Profile from "./Profile";
const NAVBAR_HEIGHT = 64; // Tailwind h-16 = 4rem = 64px

export default function Dashboard() {
  const { user, loading } = useContext(UserContext);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userArticles, setUserArticles] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState({ show: false, data: null });
  const [openEditModal, setOpenEditModal] = useState({ show: false, data: null });
  const navigate = useNavigate();
  const location = useLocation();
  // useEffect(() => {
  //   if (user) console.log("User Data:", user.fsullname);
  // }, [user]);

  const fetchArticles = async () => {
    if (fetching) return;
    try {
      setFetching(true);
      const response = await axiosInstance.get(API_PATHS.News.GET_USER_ARTICLES);
      if (response.data)
        setUserArticles(response.data);
    } catch (error) {
      console.log("Something Went wrong. Please try again ", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchArticles();
    return () => {};
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(API_PATHS.News.DELETE_ARTICLE(id));
      setOpenDeleteModal({ show: false, data: null });
      fetchArticles();
    } catch (error) {
      console.error(
        "Error deleting article:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleUpdate = async (article) => {
    try {
      const id = article._id;
      const response = await axiosInstance.put(API_PATHS.News.EDIT_ARTICLE(id), article);
      setOpenEditModal({ show: false, data: null });
      fetchArticles();
    } catch (error) {
      console.error(
        "Error updating article:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleView = (id) => {
    navigate(`/article/${id}`, {
      state: { from: location.pathname }, //
    });
  };
  if (loading) return <Loader />;

  return (
    <>

      {/* Layout with padding-top for navbar */}
      <div
        className="flex bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen w-full"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {/* Sticky Sidebar (Desktop) */}
        <aside
          className="hidden md:flex flex-col sticky top-16 h-[calc(100vh-64px)] w-64 bg-white/90 border-r border-purple-200 shadow-xl p-6 z-40"
        >
          <Profile onCreateArticle={() => setOpenCreateModal(true)} />
        </aside>

        {/* Sidebar Drawer (Mobile) */}
        <div
          className={`fixed inset-0 bg-black/40 z-50 md:hidden transition ${
            sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          className={`fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white z-50 transform transition-transform duration-300 md:hidden shadow-lg p-6 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <FiX size={24} />
          </button>
          <Profile onCreateArticle={() => setOpenCreateModal(true)} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-10 py-8 mt-4 overflow-x-auto">
          {/* Mobile menu button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 bg-white rounded-md shadow-md"
            >
              <FiMenu size={24} />
            </button>
          </div>
          <h2 className="text-3xl font-extrabold text-purple-700 mb-6 mt-6 md:mt-0">
            Your Dashboard
          </h2>
          <ArticleList
            articles={userArticles}
            onDelete={(id) => { setOpenDeleteModal({ show: true, data: id }) }}
            onEdit={(article) => { setOpenEditModal({ show: true, data: article }) }}
            onView= {(id)=>{handleView(id)}}
          />
        </main>

        {/* Modals */}
        <Modal
          isOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          title="Create New Article"
        >
          <AddArticleForm onAdd={() => setOpenCreateModal(false)} fetchArticles={fetchArticles} />
        </Modal>
        <Modal
          isOpen={openDeleteModal.show}
          onClose={() => setOpenDeleteModal({ show: false, data: null })}
          title="Delete Article"
        >
          <DeleteAlert onDelete={() => { handleDelete(openDeleteModal.data) }} 
              onCancel={() => setOpenDeleteModal({ show: false, data: null })}
          />
        </Modal>
        <Modal
          isOpen={openEditModal.show}
          onClose={() => setOpenEditModal({ show: false, data: null })}
          title="Update Article"
        >
          <EditArticleForm article={openEditModal.data} onSubmit={handleUpdate} />
        </Modal>
      </div>
    </>
  );
}
