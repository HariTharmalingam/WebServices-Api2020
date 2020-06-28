const quest = require('../../models/quest')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.questModel = connect.model('quest', Quest)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/quest/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.questModel.findById(id).then(quest => {
          res.status(200).json(quest || {})
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
