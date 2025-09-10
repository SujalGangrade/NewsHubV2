import React from 'react'
import {useState} from "react"
import Input from './Input';
import {formatDate} from "../utils/helper"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const EditArticleForm = ({article ,onSubmit }) => {
   
    const[formData , setFormData] = useState({...article, date:formatDate(article.date)});
    const handleChange = (e)=>{
        const{name,value} =e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value

        }));
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
       
         onSubmit(formData);
       
    }
    
   return (
    <div>
        
    <form onSubmit={handleSubmit}>
    <Input
        type="text"
        value={formData.title}
        label="Title"
        name="title"
        onChange={handleChange}   
        required
    />


     <label className="text-sm font-medium text-blue-700">Summary</label>
     <div >
        <textarea
        rows="3" 
        cols="80"
        value={formData.summary}
        name="summary"
        placeholder="Enter the summary of Article "
        onChange={handleChange}
         required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
     </div> 
      <label className="text-sm font-medium text-blue-700">Content</label>
     <div >
        <textarea
        rows="3" 
        cols="80"
        value={formData.content}
        name="content"
        placeholder="Enter the Content of Article "
        onChange={handleChange}
         required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
     </div> 
     <Input
       type="date"
       value={formData.date}
       label="Date"
       name="date"
       placeholder=""
      onChange={(e) =>
        setFormData((prev) => ({
        ...prev,
        date: e.target.value,  
        }))
      }
    required
     ></Input>

      <Input
       type="text"
       value={formData.imageUrl}
       label="imageUrl"
       name="imageUrl"
       placeholder="Url of Image : https://image.jpeg"
      onChange={handleChange}
     ></Input>

        <button
            type="submit"
            className="w-full mt-5 py-3 px-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-md transition duration-300"

        > 
         "Update Article"
        </button>
    </form>
    </div>
  )
}

export default EditArticleForm
