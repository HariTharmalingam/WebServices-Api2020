// Album
const createAlbum = require('./controllers/album/create')
const showAlbum = require('./controllers/album/show')
const deleteAlbum = require('./controllers/album/delete')
const updateAlbum = require('./controllers/album/update')

// Discussion
const createDiscussion = require('./controllers/discussion/create')
const showDiscussion = require('./controllers/discussion/show')
const deleteDiscussion = require('./controllers/discussion/delete')
const updateDiscussion = require('./controllers/discussion/update')

// Event
const createEvent = require('./controllers/event/create')
const showEvent = require('./controllers/event/show')
const deleteEvent = require('./controllers/event/delete')
const updateEvent = require('./controllers/event/update')

// Groupe
const createGroupe = require('./controllers/group/create')
const showGroupe = require('./controllers/group/show')
const deleteGroupe = require('./controllers/group/delete')
const updateGroupe = require('./controllers/group/update')

// Quest
const createQuest = require('./controllers/quest/create')
const showQuest = require('./controllers/quest/show')
const deleteQuest = require('./controllers/quest/delete')
const updateQuest = require('./controllers/quest/update')

// Shopping
const createShopping = require('./controllers/shopping_list/create')
const showShopping = require('./controllers/shopping_list/show')
const deleteShopping = require('./controllers/shopping_list/delete')
const updateShopping = require('./controllers/shopping_list/update')

// Ticket
const createTicket = require('./controllers/ticket/create')
const showTicket = require('./controllers/ticket/show')
const deleteTicket = require('./controllers/ticket/delete')
const updateTicket = require('./controllers/ticket/update')

// User
const createUser = require('./controllers/user/create')
const showUser = require('./controllers/user/show')
const deleteUser = require('./controllers/user/delete')
const updateUser = require('./controllers/user/update')



module.exports = {

  album: {
    createAlbum,
    showAlbum,
    deleteAlbum,
    updateAlbum
  },

  discussion: {
    createDiscussion,
    showDiscussion,
    deleteDiscussion,
    updateDiscussion
  },

  event: {
    createEvent,
    showEvent,
    deleteEvent,
    updateEvent
  },

  groupe: {
    createGroupe,
    showGroupe,
    deleteGroupe,
    updateGroupe
  },

  quest: {
    createQuest,
    showQuest,
    deleteQuest,
    updateQuest
  },

  shopping: {
    createShopping,
    showShopping,
    deleteShopping,
    updateShopping
  },

  ticket: {
    createTicket,
    showTicket,
    deleteTicket,
    updateTicket
  },

  user: {
    createUser,
    showUser,
    deleteUser,
    updateUser
  }
}
