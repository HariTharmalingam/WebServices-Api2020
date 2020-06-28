const ticket = require('../../models/ticket')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.ticketModel = connect.model('ticket', Ticket)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/ticket/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.ticketModel.findById(id).then(ticket => {
          res.status(200).json(ticket || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } else {
        res.status(401).json({
          'code': 401,
          'message': 'Error'
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

module.exports = Show
