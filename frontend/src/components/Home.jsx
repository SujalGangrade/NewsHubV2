import React, { useEffect, useState } from 'react';
import { FaNewspaper, FaSpinner } from 'react-icons/fa';
import { API_PATHS } from '../utils/apiPath';
import axiosInstance from "../utils/axiosInstance";
import Card from './Card';
function Home() {
  const[article , setArticle] = useState(null);
  const [fetching , setFetching] = useState(false);

  const fetchArticle = async()=>{
    if(fetching) return ;
    try{
         setFetching(true);
        const response = await axiosInstance.get(API_PATHS.News.GET_ALL_ARTICLES);
        if(response.data)
        setArticle(response.data);
    }catch (error) {
      console.log("Something Went wrong. Please try again ", error);
    } finally {
      setFetching(false);
    }
  }

  useEffect(()=>{
    fetchArticle();
    return ()=>{};
  },[]);



  return (
    <div className="mt-15 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FaNewspaper className="text-4xl text-blue-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Latest News & Updates
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            "Your Daily Dose of Trusted News."
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Stay connected, stay aware—because every story matters, and every voice deserves to be heard.
          </p>
        </div>

        {/* Loading State */}
        {fetching && (
          <div className="flex justify-center items-center py-20">
            <FaSpinner className="text-4xl text-blue-600 animate-spin" />
            <span className="ml-3 text-lg text-gray-600">Loading latest news...</span>
          </div>
        )}

        {/* Articles Grid */}
        {article && !fetching && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {article.map((item) => (
              <Card 
                key={item._id}
                title={item.title}
                summary={item.summary}
                imageUrl={item.imageUrl}
                date={item.date}
                id={item._id}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!article && !fetching && (
          <div className="text-center py-20">
            <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-500">No articles available at the moment</h3>
            <p className="text-gray-400">Please check back later for the latest news</p>
          </div>
        )}

      </div>
    </div>
  )
};

export default Home
