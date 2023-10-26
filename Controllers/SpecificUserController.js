const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const SpecificUser = async (req,res)=>{
    const data = req.params.id;
  // By ID
const user = await prisma.user.findUnique({
    where: {
      id: `${data}`,
    },
  })
  console.log(user);
  res.json (user)

}

module.exports = {
    SpecificUser
}