const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const PostUsers = async (req,res) =>{
  try{
   const data = req.body.data ;
   console.log(data.userName)
   const password = data.password;
   const confirmpassword = data.confirmpassword

   const IfUserExist = await prisma.user.findUnique({
    where: {
        username: data.userName ,
    },
  })

  if (IfUserExist){
    res.send("this user is already exist")
    console.log("this user is already exist ....." )
  }else if(password === confirmpassword){
    const user = await prisma.user.create({
        data: {
          username: data.userName ,
          password: data.password,
          confirmPassword : data.confirmpassword
        },
      })
      console.log(user)
    res.send("this is okay")
  }else{
    res.send("password is not match with confirm password")
    console.log("password is not match with confirm password .... ")
  }
}catch(error){
  res.send("this is an error on network .... ")
}

}

module.exports = {
    PostUsers
}