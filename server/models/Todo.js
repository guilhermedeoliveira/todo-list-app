const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Todo', todoSchema);
