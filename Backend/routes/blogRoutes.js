const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/blogController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/createPost", authMiddleware, postCtrl.createPost);
router.get("/allPost", authMiddleware, postCtrl.getAllPosts);
router.put("/updatePost/:id", authMiddleware, postCtrl.updatePost);
router.delete("/deletePost/:id", authMiddleware, postCtrl.deletePost);
router.post("/bookmarkPost/:id", authMiddleware, postCtrl.bookmarkPost);
router.get("/bookmarks", authMiddleware, postCtrl.getBookmarkedPosts);
router.get("/my-posts", authMiddleware, postCtrl.getMyPosts);
router.get("/post/:id", authMiddleware, postCtrl.getPostById);
router.post("/post/:id/comment", authMiddleware, postCtrl.addComment);
router.delete(
  "/post/:id/comment/:commentId",
  authMiddleware,
  postCtrl.deleteComment
);

module.exports = router;
