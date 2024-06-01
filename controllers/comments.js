import Comment from "../models/comments.js";
import mongoose from "mongoose";

export const postComment = async (req, res) => {
  const commentData = req.body;
  const postcomment = new Comment(commentData);
  try {
    await postcomment.save();
    res.status(200).json('Posted the comment');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const commentList = await Comment.find();
    res.status(200).json(commentList);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteComment = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Comment Unavailable..");
  }
  try {
    await Comment.findByIdAndDelete(_id);
    res.status(200).json({ message: "Deleted comment" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Comment Unavailable..");
  }
  try {
    const updateComment = await Comment.findByIdAndUpdate(
      _id,
      { $set: { "commentBody": commentBody } },
      { new: true }
    );
    res.status(200).json(updateComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};