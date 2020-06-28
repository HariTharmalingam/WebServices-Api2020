const group = require('../../models/group')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.groupModel = connect.model('group', Group)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/group/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.groupModel.findById(id).then(user => {
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
