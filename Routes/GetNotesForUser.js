const express = require('express')
const GetNotes = express.Router();
const GetNotesController = require('../Controllers/GetNotesForUserController')

GetNotes.get('/specificuser/:ID/notes',GetNotesController.GetNotesForUser)

module.exports = {
    GetNotes
}