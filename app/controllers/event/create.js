const event = require('../../models/event')
const user = require('../../models/user')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.eventModel = connect.model('event', Event)
    this.userModel = connect.model('user', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/event/create/', (req, res) => {
      try {
        const eventModel = new this.EventModel(req.body)
        res.status(201).send({
          eventModel
        })
      } catch (err) {
        console.log(err)
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
