const express=require('express')
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const router=express.Router()

let users=[]
//ALl routes in here are starting with /users
router.get('/',(req, res)=>{
    
    res.send(users)
})
//POST ROUTE
router.post('/', (req,res)=>{
 const user=req.body
const userId= uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const userWithId= {...user, id:userId}
 users.push(userWithId)
 res.send(`User with the name ${user.firstName} added to the database`)
})
//users/2=>req.params{id:2}

//GET ROUTE
router.get('/:id', (req,res)=>{
    const {id}=req.params

    const foundUser= users.find((user)=>    user.id===id
    )
     
res.send(foundUser)
})

//DELETE ROUTE
router.delete('/:id', (req, res)=>{
    const {id}=req.params

    users=users.filter((user)=>user.id !=id)
    res.send(`User with the id ${id} deleted from DB`)
})

//PATCH ROUTE
router.patch('/:id', (req, res)=>{
    const {id}=req.params
    const user= users.find((user)=>user.id===id)

    const {firstName, lastName, age}= req.body
    if(firstName){
        user.firstName=firstName
    }
    if(lastName){
        user.lastName=lastName
    }
    if(age){
        user.age=age
    }

    res.send(`User with the id ${id} has been updated`)
})
module.exports=router