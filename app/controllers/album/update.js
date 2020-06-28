const album = require('../../models/album')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.albumModel = connect.model('album', Album)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/album/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req
      const update = {
        $addToSet: {
          albums: body.album
        }
      }
      this.albumModel.findByIdAndUpdate(id, update, {
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
