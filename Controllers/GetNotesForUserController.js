const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const GetNotesForUser = async (req,res) =>{
    const {ID} =req.params
    const userNotes = await prisma.notes.findMany({
      where: {
        author: {
          id:`${ID}` // Replace `userId` with the actual ID of the user you want to retrieve notes for
        }
      }
    });
    res.json(userNotes)
    console.log(userNotes)

}

module.exports = {
    GetNotesForUser
}