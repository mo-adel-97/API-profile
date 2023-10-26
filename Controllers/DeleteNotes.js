const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const DeleteNotes = async (req,res)=>{
    try {
        const { ID } = req.params;
        console.log(ID);
        const deleteNote = await prisma.notes.delete({
          where: {
            id: `${ID}`,
          },
        });
        res.send("this note deleted");
        console.log(deleteNote);
      } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).send("An error occurred while deleting the note");
      }
    };
module.exports = {
    DeleteNotes
}