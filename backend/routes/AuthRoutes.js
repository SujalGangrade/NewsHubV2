//authroutes.js

const express = require("express");
const {protect} = require("../middlewares/authMiddleware")
const app = express();
const upload = require("../middlewares/uploadMiddleWare");

const {loginUser , registerUser , getUserInfo} = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",registerUser);
router.get("/getuserinfo",protect, getUserInfo);
router.post("/uploadImage", upload.single("image") , (req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename}`; 
    res.status(200).json({imageUrl});
})
module.exports = router;
