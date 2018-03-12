import mongoose from 'mongoose';

// Add Schema
const postItemSchema = mongoose.Schema({
    header: String,
    poster: String,
    content: String
});

// Data model
export const postItemSchema = mongoose.model('postItemSchema', postItemSchema);
