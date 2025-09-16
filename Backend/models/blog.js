const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tags: [{ type: String, trim: true }], // for searching/filtering
    image: { type: String }, // Cloudinary URL
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // saved posts
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],

    views: { type: Number, default: 0 }, // analytics

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

module.exports = mongoose.model("Post", postSchema);
