const express=require("express")
const {createPost, likeAndUnlike, deletePost, getPostsOfFollowing, updateCaption, addComment, deleteComment}= require("../controllers/Post")
const { isAuthenticated } = require("../middlewares/Auth")
const router= express.Router()

router.route("/post/upload").post(isAuthenticated,createPost)

// to like and unlike post  and delte
router.route("/post/:id").get(isAuthenticated,likeAndUnlike).delete(isAuthenticated,deletePost).put(isAuthenticated, updateCaption)

router.route("/posts").get(isAuthenticated, getPostsOfFollowing)
router.route("/post/comment/:id").put(isAuthenticated, addComment)
router.route("/delete/comment/:id").delete(isAuthenticated, deleteComment)

module.exports=router