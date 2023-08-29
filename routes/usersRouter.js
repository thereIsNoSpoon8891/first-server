const express = require("express")
const usersRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const users = [{
    name: "Snake",
    age: 34,
    _id: uuidv4()
},{
    name: "Jenni",
    age: 23,
    _id: uuidv4()
},{
    name: "Jane",
    age: 5,
    _id: uuidv4()

},{
    name: "Damian",
    age: 8,
    _id: uuidv4()
}]

// ROUTES
// takes 2 arguements, 1.(optional) endpoint ( AKA mount path) 2. callback function
usersRouter.get("/", (req, res) => {// request, response

    res.send(users);

})

usersRouter.get("/:userId", (req, res, next)=>{
    const userId = req.params.userId
    const foundUser = users.find( user => user._id === userId)
    if(!foundUser){
        const error = new Error(`account ${userId} not found.`)
        return next(error)
    }
    res.send(foundUser)
})

usersRouter.post("/", (req, res) =>{
    const newUser = req.body;// not necessary but, helps clarify for learning
    newUser._id = uuidv4();// // good for our fake data, BUT we can just say, accounts.push(req.body)
    users.push(newUser);// push the new object into our existing array 
    res.send(`Success! ${newUser.name} added to the database.`);
})





module.exports = usersRouter