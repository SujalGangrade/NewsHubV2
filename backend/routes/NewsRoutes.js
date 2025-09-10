
const express = require("express");
const {protect} = require("../middlewares/authMiddleware")
const app = express();

const {createNews , getUserArticles, deleteArticle, updateArticle,getAllArticles, getArticleById, countUserArticle} = require("../controllers/newsController");

const router = express.Router();

router.post("/create",protect, createNews);
router.get("/getUserArticle",protect, getUserArticles);
router.get("/getArticles",getAllArticles );
router.delete("/:id",protect,deleteArticle);
router.put("/edit/:id",protect,updateArticle);
router.get("/article/:id", getArticleById);
router.get("/countArticles" , protect , countUserArticle);
module.exports = router;

