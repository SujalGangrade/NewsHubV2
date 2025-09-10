import React, { use } from 'react'
import { useState } from 'react';
import Input from "../components/Input"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import {useNavigate} from "react-router-dom"

const AddArticleForm = ({onAdd , fetchArticles}) => {
    const[title , setTitle] = useState("");
    const[content ,setContent] = useState("");
    const[summary ,setSummary] = useState("");
    const[imageUrl , setImageUrl] = useState("");
    const[date , setDate] = useState("");
    const[loadingbtn , setLoadingbtn] = useState(false);
    const [error ,setError] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!title || !content || !summary || !date )
        {
            setError("All field are required");
            return;
        }
        setLoadingbtn(true);
        try{
          const response = await axiosInstance.post(API_PATHS.News.CREATE, {title , content,summary , imageUrl ,date});
          const {post} = response.data;
          // console.log(post);
          setError("");
        //   navigate("/dashboard");
        onAdd();
        fetchArticles();
          return;
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
    <div>
        {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
    )}
    <form onSubmit={handleSubmit}>
     <Input
       type="text"
       value={title}
       label="Title"
       placeholder="Enter the title of Article"
       onChange={(e)=>setTitle(e.target.value)}
       required
     ></Input>

     <label className="text-sm font-medium text-blue-700">Summary</label>
     <div >
        <textarea
        rows="3" 
        cols="80"
        value={summary}
        placeholder="Enter the summary of Article "
        onChange={(e)=>setSummary(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
     </div> 
      <label className="text-sm font-medium text-blue-700">Content</label>
     <div >
        <textarea
        rows="3" 
        cols="80"
        value={content}
        placeholder="Enter the Content of Article "
        onChange={(e)=>setContent(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
     </div> 
     <Input
       type="date"
       value={date}
       label="Date"
       placeholder=""
       onChange={(e)=>setDate(e.target.value)}
       required
     ></Input>

      <Input
       type="text"
       value={imageUrl}
       label="imageUrl"
       placeholder="Url of Image : https://image.jpeg"
       onChange={(e)=>setImageUrl(e.target.value)}
     ></Input>

        <button
            type="submit"
            className="w-full mt-5 py-3 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-md transition duration-300"
            disabled={loadingbtn}
        >
            {loadingbtn ? (
                <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin mx-auto" />
            ) : (
                "Add Article"
            )}
        </button>
    </form>
    </div>
  )
}

export default AddArticleForm
