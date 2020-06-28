const shopping_list = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping_list', Shopping)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/shopping_list/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req

      this.shoppingModel.findByIdAndUpdate(id, body, {
        new: true
      }).then(shopping_list => {
        res.status(200).json(shopping_list || {})
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
