const album = require('../../models/album')
const Event = require('../../models/event')
const JWT = require('../../jwt')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.albumModel = connect.model('album', Album)
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/album/create/', (req, res) => {
      try {
        const albumModel = new this.albumModel(req.body)
        const event = this.eventModel.findById(req.body.event)
        
        albumModel.save()
        res.status(201).send({
          albumModel
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

module.exports = Create
