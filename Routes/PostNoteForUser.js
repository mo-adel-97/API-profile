const express = require('express')

const PostNoteFrUser = express.Router();
const PostNotesController = require('../Controllers/PostNotesController')

PostNoteFrUser.post('/user/:id/notes',PostNotesController.PostNotes)

module.exports = {
    PostNoteFrUser
}