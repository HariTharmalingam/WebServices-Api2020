const album = require('../../models/album')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.albumModel = connect.model('album', Album)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/album/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.albumModel.findByIdAndDelete(id).then(album => {
          res.status(200).json(album || {})
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
