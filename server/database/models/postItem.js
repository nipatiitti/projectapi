import mongoose from 'mongoose';

// Add Schema
export const postItemSchema = mongoose.Schema({
    header: String,
    poster: String,
    content: String
});
