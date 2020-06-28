const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const discussionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: [{
    user: ObjectId,
    content: String,
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  group: ObjectId,
  event: ObjectId,
  admin: {
    type: [],
    require: true
  },
  users: {
    type: []
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'discussion',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = discussionSchema
