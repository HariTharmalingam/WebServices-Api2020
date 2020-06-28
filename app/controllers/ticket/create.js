const ticket = require('../../models/ticket')
const event = require('../../models/event')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.ticketModel = connect.model('ticket', Ticket)
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/ticket/create/', (req, res) => {
      try {
        const ticketModel = new this.ticketModel(req.body)
        const event = await this.eventModel.findById(req.body.event)

        ticketModel.save()
        res.status(201).send({
          ticketModel
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }
  /**
   * run
   */
  run() {
    this.middleware()
  }
}

module.exports = Create
