const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const SpecificUser = async (req,res)=>{
    try{
    const data = req.params.id;
const user = await prisma.user.findUnique({
    where: {
      id: `${data}`,
    },
  })
  console.log(user);
  res.json (user)
    }catch(error){
        console.error("Error deleting note:", error);
        res.status(500).send("An error occurred while deleting the note");
    }
}

module.exports = {
    SpecificUser
}