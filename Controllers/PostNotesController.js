const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const PostNotes = async (req,res)=>{
    try {
  const {id} = req.params;
  const data = req.body;
console.log(data)
const TITLE = data.noteName;
const BODY = data.noteContent 
  console.log(id)
    const user = await prisma.user.findUnique({
      where: { id: `${id}` },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const note = await prisma.notes.create({
      data: {
        title:TITLE,
        body:BODY,
        author: {
            connect: {
              id: `${id}` 
            }
          }
      },
    });

    return res.status(201).json(note);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
    PostNotes
}