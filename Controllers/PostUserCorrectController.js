const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const jwt = require('jsonwebtoken');

const CorrectUser = async (req,res) =>{
    try {
  const data = req.body.data
  console.log(data)
  const IfUserExist = await prisma.user.findUnique({
    where: {
        username: data.userName ,
        password: data.password ,
    },
  })

 if(IfUserExist){
  const id = IfUserExist.id
  console.log(id)
  const token = jwt.sign({id}, "MohamedAdel", {
    expiresIn: 300,
})
   res.json({correctUser:"this is correct user",user:{IfUserExist},token:{token}})
 }else{
  res.send("userName or password is not correct ")
 }
}
catch (error) {
    res.status(400).json({message: error.message})
}

}

module.exports = {
    CorrectUser
}