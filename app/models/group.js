const mongoose = require('mongoose')

const groupeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  cover_photo: String,
  public: Boolean,
  admin: {
    type: [],
    require: true
  },
  member: Object,
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'groupe',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = groupeSchema
