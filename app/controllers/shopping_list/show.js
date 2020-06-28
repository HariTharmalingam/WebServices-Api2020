const shopping_list = require('../../models/shopping_list')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping_list', Shopping_list)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/shopping_list/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.shoppingModel.findById(id).then(shopping_list => {
          res.status(200).json(shopping_list || {})
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
