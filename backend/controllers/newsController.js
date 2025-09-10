const express = require("express");
const News = require("../models/News"); 
const { default: mongoose } = require("mongoose");

const createNews = async(req, res)=>{
    const {title , content, summary , imageUrl , date} = req.body ;
    if(!title || !content || !summary || !date )
    {
       return res.status(400).json({ message: "All fields are required" });
    }
    try{
        const userId = req.userId;
        const post =  await News.create({
            title,
            content,
            summary,
            imageUrl,
            date,
            userId
        })

       return res.status(200).json({message:"Article created Successfully " , post}); 
    }catch (error) {
    console.error("Error in  Creating Article :", error);
    return res.status(500).json({ message: "Error in Creating Article ", error: error.message });
    }

}

const getUserArticles = async(req,res)=>{
    const userId = req.userId;

    try{
        const userArticles = await News.find({userId:userId}).sort({date:-1});
       return res.status(200).json(userArticles);
    }catch (error) {
    console.error("Error in  fetching user's Articles :", error);
    return res.status(500).json({ message: "Error in fetching user's Article ", error: error.message });
    }
}

const deleteArticle = async(req,res)=>{
    const reqUserId = req.userId;
    const  id = req.params.id ;
    try{
        const article =  await News.findById(id);
        const articleUserId =article.userId;
        // console.log(articleUserId);
        // console.log(reqUserId);
        if(articleUserId != reqUserId)
           return res.status(400).json({message:"Unauthorized Delete Request"});
        await News.findByIdAndDelete(id);
        res.status(200).json({message:"Article Deleted Successfully "});
        
    }catch(error){
        return res.status(500).json({message:"server Error" , Error:error});
    }
}

const updateArticle = async(req,res)=>{
    const reqUserId = req.userId;
    const  id = req.params.id ;
    try{
        const article =  await News.findById(id);
        const articleUserId =article.userId;
        // console.log(articleUserId);
        // console.log(reqUserId);
        if(articleUserId != reqUserId)
           return res.status(400).json({message:"Unauthorized Delete Request"});

        const updatedArticle = req.body;
        article.content = updatedArticle.content;
        article.summary = updatedArticle.summary;
        article.title =updatedArticle.title;
        article.date = updatedArticle.date;
        article.imageUrl = updatedArticle.imageUrl;

        await article.save();
        res.status(200).json({message:"Article Updated Successfully "});
        
    }catch(error){
        return res.status(500).json({message:"server Error" , Error:error});
    }
}

const getAllArticles = async(req,res)=>{

    try{
        const article = await News.find().sort({date:-1});
        if(article)
           return res.status(200).json(article);
    }
    catch(error){
        return res.status(400).json({message:"Error in fetching articles" ,error:error});
    }
}

const getArticleById = async(req,res)=>{
    try{
        const id = req.params.id;
      
        const article = await News.findById(id);
       
        if(article){
            return res.status(200).json(article);
        }
    }
    catch(error){
        return res.status(400).json({message:"Server Error" , error});
    }
}

const countUserArticle = async(req,res)=>{
    try{
        const userId = req.userId;
        if(userId){
            const articles = await News.find({userId});
            const count = articles.length;
            return res.status(200).json(count);  
        }
        else{
            return res.status(400).json({message:"Not Authorized request"});
        }
    }catch(error){
        return res.status(400).json({message:"Server Error" ,error});
    }
}

module.exports= {createNews ,getUserArticles,deleteArticle, updateArticle , getAllArticles,getArticleById , countUserArticle};