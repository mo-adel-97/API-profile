const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const DeleteRoutes = express.Router();

DeleteRoutes.delete('/notes/delete/:ID',async (req,res)=>{
    const {ID} = req.params
    console.log(ID)
    const deleteNote = await prisma.notes.delete({
        where: {
              id:`${ID}`
          }
      })
      res.send("this note deleted")
      console.log(deleteNote)
})


module.exports = {
    DeleteRoutes
}