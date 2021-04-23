import mongoose from 'mongoose';

 const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String,
    likeCount: {
        type: String,
        default: 0
    },
    // CreateAt updatedAt
 }, { timestramps: true }
 );

 export const PostModel = mongoose.model('Post', schema);