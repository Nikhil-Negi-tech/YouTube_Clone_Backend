import mongoose from "mongoose";
import users from "../models/auth.js";

export const updateChannelData = async (req, res) => {
  const { id: _id } = req.params;
  const { name, desc } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Channel not found");
  }

  try {
    const updatedData = await users.findByIdAndUpdate(
      _id,
      { name, desc },
      { new: true }
    );
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const getAllChannel = async (req, res) => {
  try {
    const allChannel = await users.find();
    const allChannelDetails = allChannel.map((channel) => ({
      _id: channel._id,
      name: channel.name,
      email: channel.email,
      desc: channel.desc,
    }));
    res.status(200).json(allChannelDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};