const user = require('../models/user')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.userModel = connect.model('user', User)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/user/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.UserModel.findById(id).then(user => {
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
