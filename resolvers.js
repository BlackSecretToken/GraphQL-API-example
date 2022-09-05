const db = require('./db')
const Mutation = {
   createStudent:(root,args,context,info) => {
      return db.students.create({collegeId:args.collegeId,
      firstName:args.firstName,
      lastName:args.lastName})
   }
}
const Query = {
   greeting:() => "hello"
}

module.exports = {Query,Mutation}