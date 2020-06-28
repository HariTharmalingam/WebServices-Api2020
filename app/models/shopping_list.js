const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const shoppingSchema = new mongoose.Schema({
  event: {
    type: ObjectId
  },
  name: String,
  qty: Number,
  arrival_time: Date,
  bring: String,
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'shopping',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = shoppingSchema
