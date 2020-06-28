const user = require('../models/user')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.userModel = connect.model('user', User)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/user/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.userModel.findByIdAndDelete(id).then(user => {
          res.status(200).json(user || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
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

module.exports = Delete
