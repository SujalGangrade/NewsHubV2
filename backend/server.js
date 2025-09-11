require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDb = require("./config/db");
const AuthRoutes = require("./routes/AuthRoutes");
const NewsRoutes = require("./routes/NewsRoutes");
const app = express();
app.use(
    cors({
        origin :"https://newshubv2.netlify.app"|| '*',
        methods:["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-Type", "Authorization"]
    })
);

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
connectDb();

app.use("/auth" , AuthRoutes);
app.use("/news" ,NewsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));



