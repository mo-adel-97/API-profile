const express = require('express')

const DeleteRoutes = express.Router();
const DeleteNoteController = require('../Controllers/DeleteNotes')

DeleteRoutes.delete('/notes/delete/:ID',DeleteNoteController.DeleteNotes)


module.exports = {
    DeleteRoutes
}