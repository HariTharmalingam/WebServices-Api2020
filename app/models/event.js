const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date_start: {
    type: Date
    // required: true
  },
  date_end: {
    type: Date
    // required: true
  },
  location: String,
  cover_photo: String,
  public: Boolean,
  admin: {
    type: [],
    require: true
  },
  participants: Object,
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'events',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = eventSchema
