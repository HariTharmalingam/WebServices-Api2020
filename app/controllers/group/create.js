const group = require('../../models/group')
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
    this.userModel = connect.model('user', User)
    this.groupModel = connect.model('group', Group)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/Group/create/', (req, res) => {
      try {
        const eventModel = new this.groupModel(req.body)
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
