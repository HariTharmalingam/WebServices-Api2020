const quest = require('../../models/quest')
const event = require('../../models/event')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.questModel = connect.model('quest', Quest)
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/quest/create/', (req, res) => {
      try {
        const questModel = new this.questModel(req.body)
        const event = await this.eventModel.findById(req.body.event)

        if (!event) {
          return res.status(403).json('Invalid Event ID')
        }

        questModel.save()
        res.status(201).send({
          questModel
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
