const event = require('../../models/event')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/event/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req

      this.eventModel.findByIdAndUpdate(id, body, {
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
