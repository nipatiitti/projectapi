import mongoose from 'mongoose';

// Add Schema
export const postItemSchema = mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  type: {
    type : String,
    default : 'math',
    enum : ['math', 'biology', 'historia', 'physics', 'other']
  },
  tag: {
    type : String,
    default : 'derivaatta',
    enum : ['derivaatta', 'integraali', 'yo', 'geometria', 'other']
  },
  comments: [{ body: String, date: Number }],
  createdAt: Number,
  meta: {
    upvotes: Number,
    rating: Number
  }
});
