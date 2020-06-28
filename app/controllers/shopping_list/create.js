const shopping_list = require('../../models/shopping_list')
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
    this.shoppingModel = connect.model('shopping_list', Shopping_list)
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/shopping_list/create/', (req, res) => {
      try {
        const shoppingModel = new this.shoppingModel(req.body)
        const event = await this.eventModel.findById(req.body.event)

        shoppingModel.save()
        res.status(201).send({
          shoppingModel
        })
      } catch (err) {
        console.log(err)
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
