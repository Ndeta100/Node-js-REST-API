const express= require('express')
const bodyParser=require('body-parser')
const users=require('./routes/users.js')

const app= express()

const port= 5000

app.use(bodyParser.json())

app.use('/users', users)

app.get('/',(req,res)=>{
res.send('Hello from homepage')
})

app.listen(port, (req , res)=>{
    console.log(`Server running on port ${port}`)
})
