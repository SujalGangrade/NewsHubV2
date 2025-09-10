// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { API_PATHS } from '../utils/apiPath';
// import axiosInstance from '../utils/axiosInstance';
// import { formatDate2 } from '../utils/helper';

// import Loader from './Loader';
// const Article = () => {
//     const {id}= useParams();
//     const[article , setArticle] = useState(null);
//     const[fetching , setFetching] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//    const getArticle = async()=>{
//     if(fetching) return ;
//     setFetching(true);
//     try{
//      const response  = await axiosInstance.get(API_PATHS.News.GET_ARTICLE_BY_ID(id));
//         if(response.data)
//         {
//             const data= response.data;
//             setArticle(data);
//         }
//           return; 

//     }catch(error){
//         console.error("Error in Fecthing Article", error);
//         return ;
//     }finally{
//         setFetching(false);
//     }
//    }
//   const handleClose =()=>{
//     if(location.state?.from){
//       navigate(location.state.from);
//     }
//     else{
//       navigate("/");
//     }
//   }
//    useEffect(()=>{
//     getArticle();
//     console.log(article);
//     return ()=>{};
//    },[]);
  
//   return (
//     <div className='mt-15'>
      
//      {fetching && <Loader/> }
//      {!fetching && article &&
//        <div className="mt-15">
//         <div>
//             <button onClick= {handleClose}>back</button>
//             <img src={article.imageUrl} alt="" />
//         </div>

//         <div>
//             <h2>Title {article.title}</h2>
//             <h3>Summary {article.summary}</h3>
//             <p>{article.content}</p>
//             <p>{formatDate2(article.date)}</p>
//         </div>
//        </div>
//      }
//     </div>
//   )
// }
// export default Article


import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { API_PATHS } from "../utils/apiPath"
import axiosInstance from "../utils/axiosInstance"
import { formatDate2 } from "../utils/helper"
import Loader from "./Loader"

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [fetching, setFetching] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const getArticle = async () => {
    if (fetching) return
    setFetching(true)
    try {
      const response = await axiosInstance.get(API_PATHS.News.GET_ARTICLE_BY_ID(id))
      if (response.data) setArticle(response.data)
    } catch (error) {
      console.error("Error in fetching article", error)
    } finally {
      setFetching(false)
    }
  }

  const handleClose = () => {
    if (location.state?.from) navigate(location.state.from)
    else navigate("/")
  }

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <div className="mt-20 max-w-4xl mx-auto px-4 py-10">
      {fetching && <Loader />}
      {!fetching && article && (
        <div className="space-y-8">
          {/* Back button */}
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg shadow-md hover:from-purple-500 hover:to-pink-500 transition"
          >
            Back
          </button>

          {/* Article Image */}
          <div className=" rounded-xl overflow-hidden shadow-lg">
            <img src={article.imageUrl} alt={article.title} className="w-full object-cover" />
          </div>

          {/* Article Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{article.title}</h2>
            <h3 className="text-lg text-gray-600">{article.summary}</h3>
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
            <p className="text-sm text-gray-500">{formatDate2(article.date)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Article
