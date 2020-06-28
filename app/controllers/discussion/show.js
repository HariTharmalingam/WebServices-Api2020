const discussion = require('../../models/discussion')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.discussionModel = connect.model('discussion', Discussion)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/discussion/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.discussionModel.findById(id).then(user => {
          res.status(200).json(user || {})
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
