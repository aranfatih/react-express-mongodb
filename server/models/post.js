const Mongoose = require('mongoose');

// Create schema
let postSchema = Mongoose.Schema({
  description: {
    type: String,
    require: true
  },

  date: {
    type: String,
    require: true
  },
  
  likes: {
    type: Number,
    require: true
  },
  
  comments: [String],
  
});

// Export
let post = module.exports = Mongoose.model('post', postSchema);