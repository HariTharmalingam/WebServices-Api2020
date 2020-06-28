const user = require('../models/user')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.userModel = connect.model('user', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/user/create', async (req, res) => {
      try {
        const userModel = new this.userModel(req.body)
        res.status(201).send({
          userModel
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
