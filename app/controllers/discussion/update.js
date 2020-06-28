const discsussion = require('../../models/discussion')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.discussionModel = connect.model('discsussion', Discsussion)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/discussion/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req
      const update = {
        $addToSet: {
          message: body.message,
          users: body.user
        }
      }
     
      this.discussionModel.findByIdAndUpdate(id, update, {
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
