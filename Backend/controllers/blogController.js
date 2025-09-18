const Post = require("../models/blog");

// ✅ Create a Post
exports.createPost = async (req, res) => {
  try {
    const { title, content, tags, image } = req.body;
    console.log("Creating post with data:", {
      title,
      content,
      tags,
      image,
      userId: req.userId,
    });

    const post = await Post.create({
      title,
      content, // HTML from CKEditor
      tags,
      image,
      author: req.userId,
    });

    res.status(201).json({ success: true, post });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get All Posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name profilePicture bio")
      .populate("comments.user", "name profilePicture")
      .sort({ createdAt: -1 });

    res.json({ success: true, posts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Update Post (only by owner)
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const { title, content, tags, image } = req.body;
    post.title = title || post.title;
    post.content = content || post.content; // still HTML from CKEditor
    post.tags = tags || post.tags;
    post.image = image || post.image;
    post.updatedAt = Date.now();

    await post.save();

    res.json({ success: true, post });
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Delete Post (only by owner)
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ success: true, message: "Post deleted" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Bookmark / Unbookmark Post
exports.bookmarkPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const alreadyBookmarked = post.bookmarks.includes(req.userId);

    if (alreadyBookmarked) {
      post.bookmarks = post.bookmarks.filter(
        (userId) => userId.toString() !== req.userId
      );
      await post.save();
      return res.json({ success: true, message: "Removed from bookmarks" });
    } else {
      post.bookmarks.push(req.userId);
      await post.save();
      return res.json({ success: true, message: "Added to bookmarks" });
    }
  } catch (err) {
    console.error("Error bookmarking post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get Blog Detail by ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching post with ID:", id);

    const post = await Post.findById(id)
      .populate("author", "name profilePicture bio")
      .populate("comments.user", "name profilePicture");

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    res.json({ success: true, post });
  } catch (err) {
    console.error("Error fetching post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Add Comment
exports.addComment = async (req, res) => {
  try {
    const { id } = req.params; // postId
    const { text } = req.body;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = {
      user: req.userId,
      text,
      createdAt: new Date(),
    };

    post.comments.push(newComment);
    const ress= await post.save();
    

    await post.populate("comments.user", "name profilePicture");

    res.json({ success: true, comments: post.comments });
  } catch (err) {
    console.error("Error adding comment:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Delete Comment
exports.deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params; // postId + commentId

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    // Only comment owner or post author can delete
    if (
      comment.user.toString() !== req.userId &&
      post.author.toString() !== req.userId
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.comments.pull(commentId);
    const ress=await post.save();
    console.log("After deleting comment, post:", ress);
    

    res.json({ success: true, message: "Comment deleted" });
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get all bookmarked blogs of logged-in user
exports.getBookmarkedPosts = async (req, res) => {
  console.log("Fetching bookmarked posts for user:", req.userId);
  
  try {
    const posts = await Post.find({ bookmarks: req.userId })
      .populate("author", "name profilePicture bio")
      .populate("comments.user", "name profilePicture")
      .sort({ createdAt: -1 });

    res.json({ success: true, posts });
  } catch (err) {
    console.error("Error fetching bookmarked posts:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get all blogs of logged-in user (own blogs)
exports.getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.userId })
      .populate("author", "name profilePicture bio")
      .populate("comments.user", "name profilePicture")
      .sort({ createdAt: -1 });

    res.json({ success: true, posts });
  } catch (err) {
    console.error("Error fetching my posts:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
