const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/blogController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/createPost", authMiddleware, postCtrl.createPost);
router.get("/allPost", authMiddleware, postCtrl.createPost);
router.put("/updatePost/:id", authMiddleware, postCtrl.updatePost);
router.delete("/deletePost/:id", authMiddleware, postCtrl.deletePost);
router.post("/bookmarkPost/:id", authMiddleware, postCtrl.bookmarkPost);

module.exports = router;
