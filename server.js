const express = require("express");

const app = express();

// middleware for EVERY request
app.use(express.json());// looks for a request body, and turns it into (req.body)

// ROUTES
app.use("/users", require("./routes/usersRouter.js"))

app.use("/accounts", require("./routes/accountRouter.js"))

/* 
Error Handling, MUST have 4 PARAMS, express assumes 4 params
 means error handling function!
 */
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errorMessge: err.message})
})

app.listen(9000, () => {
    console.log("server running on port 9000");
})