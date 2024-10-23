import express from 'express';
import userAuth from '../middleware/authMiddleware.js';
import {createPost, getComments, getPost, getUserPost} from'../Controllers/postController.js'


const router = express.Router();

//creating post :-
router.post("/create-post",userAuth,createPost);

//get post:-
router.post("/get-post",userAuth,createPost);

//fetch post
router.post("/",userAuth, getPost);


router.post("/get-user-post/:id", userAuth, getUserPost);


//get comments 
router.get("/comments/:postId", getComments);

export default router