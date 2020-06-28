const discussion = require('../../models/discussion')
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
    this.discussionModel = connect.model('discussion', Discussion)
    this.userModel = connect.model('user', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/discussion/create/', (req, res) => {
      try {
        const {
          body
        } = req

        const discussionModel = new this.DiscussionModel(req.body)
        res.status(201).send({
          discussionModel
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
