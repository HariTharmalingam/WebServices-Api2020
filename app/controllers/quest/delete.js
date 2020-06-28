const quest = require('../../models/quest')
const JWT = require('../../jwt.js')
const jwt = new JWT()

/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.questModel = connect.model('quest', quest)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/quest/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.questModel.findByIdAndDelete(id).then(quest => {
          res.status(200).json(quest || {})
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
