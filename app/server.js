const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes.js')

/**
 * Server
 * @Class
 */
class Server {
  constructor() {
    this.app = express()
  }

  /**
   * Data base connect
   * @return {Object} connect
   */
  dbConnect() {
    const host = 'mongodb://localhost:27017/facebookAPI'
    const connect = mongoose.createConnection(host)

    connect.on('error', (err) => {
      setTimeout(() => {
        console.error(`[ERROR] api dbConnect() -> ${err}`)
        this.connect = this.dbConnect(host)
      }, 5000)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000)
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * Middleware
   */
  middleware() {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({
      'extended': true
    }))
  }

  /**
   * Routes
   */
  routes() {
    new routes.User(this.app, this.connect)

    // Album
    new routes.album.createAlbum(this.app, this.connect)
    new routes.album.showAlbum(this.app, this.connect)
    new routes.album.deleteAlbum(this.app, this.connect)
    new routes.album.updateAlbum(this.app, this.connect)

    // Discussion
    new routes.discussion.createDiscussion(this.app, this.connect)
    new routes.discussion.showDiscussion(this.app, this.connect)
    new routes.discussion.deleteDiscussion(this.app, this.connect)
    new routes.discussion.updateDiscussion(this.app, this.connect)

    // Event
    new routes.event.createEvents(this.app, this.connect)
    new routes.event.showEvents(this.app, this.connect)
    new routes.event.updateEvents(this.app, this.connect)
    new routes.event.deleteEvents(this.app, this.connect)

    // Groupe
    new routes.group.createGroupe(this.app, this.connect)
    new routes.group.showGroupe(this.app, this.connect)
    new routes.group.updateGroupe(this.app, this.connect)
    new routes.group.deleteGroupe(this.app, this.connect)

    // Quest
    new routes.quest.createQuest(this.app, this.connect)
    new routes.quest.showQuest(this.app, this.connect)
    new routes.quest.deleteQuest(this.app, this.connect)
    new routes.quest.updateQuest(this.app, this.connect)

    // Shopping 
    new routes.shopping_list.createShopping(this.app, this.connect)
    new routes.shopping_list.showShopping(this.app, this.connect)
    new routes.shopping_list.deleteShopping(this.app, this.connect)
    new routes.shopping_list.updateShopping(this.app, this.connect)

    // Ticket
    new routes.ticket.createTicket(this.app, this.connect)
    new routes.ticket.showTicket(this.app, this.connect)
    new routes.ticket.deleteTicket(this.app, this.connect)
    new routes.ticket.updateTicket(this.app, this.connect)

    // User
    new routes.user.createUser(this.app, this.connect)
    new routes.user.showUser(this.app, this.connect)
    new routes.user.deleteUser(this.app, this.connect)
    new routes.user.updateUser(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: 'not found'
      })
    })
  }

  /**
   * Run
   */
  run() {
    try {
      this.connect = this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(3000)
    } catch (err) {
      console.log(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
