const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ticketSchema = new mongoose.Schema({
  event: {
    type: ObjectId,
    required: true
  },
  tickets: [{
    name: String,
    price: Number,
    qty: Number,
    ticket_sold: [{
      name: String,
      buyer: ObjectId,
      first_name: String,
      last_name: String,
      full_adress: String,
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
  collection: 'ticket',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = ticketSchema
