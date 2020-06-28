const album = require('../../models/album')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.albumModel = connect.model('album', Album)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/album/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.albumModel.findById(id).then(user => {
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
