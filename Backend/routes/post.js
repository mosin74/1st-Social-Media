const express=require('express');
const { createPost, likeDislikepost, deletPost } = require("../controllers/post");
const { isAuthenticated } = require('../middlewares/auth');

const router=express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);
router.route("/post/:id").get(isAuthenticated,likeDislikepost).delete(isAuthenticated,deletPost)
module.exports=router;