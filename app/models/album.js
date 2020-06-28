const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const albumSchema = new mongoose.Schema({
  event: {
    type: ObjectId,
    required: true,
    unique: true
  },
  albums: [{
    participant: ObjectId,
    photo: [],
    created_at: {
      type: Date,
      default: Date.now
    },
    comments: [{
      participant: ObjectId,
      message: String,
      created_at: {
        type: Date,
        default: Date.now
      }
    }]
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'album',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = albumSchema
