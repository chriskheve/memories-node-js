import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'


import postRoutes from './routes/posts.js' 
import userRoutes from './routes/users.js' 

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const CONNECTION_URL = "mongodb://127.0.0.1:27017/memories"
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT} `)) )
.catch((error) => console.log("error ", error.message));


 //   mongoose.set('useFindAndModify', false);