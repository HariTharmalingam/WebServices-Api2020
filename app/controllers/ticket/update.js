const ticket = require('../../models/ticket')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.ticketModel = connect.model('ticket', Ticket)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/ticket/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req
      const update = {
        $addToSet: {
          tickets: body.ticket
        }
      }

      this.ticketModel.findByIdAndUpdate(id, update, {
        new: true
      }).then(event => {
        res.status(200).json(event || {})
      }).catch(err => {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      })
    })
  }
  /**
   * run
   */
  run() {
    this.middleware()
  }
}

module.exports = Update
