const express = require("express")
const accountRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const accounts = [{
    type: "checking",
    balance: 500,
    _id: uuidv4()
},{
    type: "savings",
    balance: 4000,
    _id: uuidv4()
},{
    type: "retirement",
    balance: 34,
    _id: uuidv4()
}]


accountRouter.route("/")
.get((req, res) => {
    res.send(accounts)
})
.post( (req, res) => {
    const newAccount = req.body;
    newAccount._id = uuidv4()
    accounts.push(newAccount)// good for our fake data, BUT we can just say, accounts.push(req.body)
    res.send(`${newAccount.type} was added!`)
})

module.exports = accountRouter