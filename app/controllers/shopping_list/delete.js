const shopping_list = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping_list', Shopping_list)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/shopping_list/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.shoppingModel.findByIdAndDelete(id).then(shopping_list => {
          res.status(200).json(shopping_list || {})
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
