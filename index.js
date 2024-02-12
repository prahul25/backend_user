require('dotenv').config();
const express = require("express")
const app = express()
const {getUserData ,getUserDataByUiid, getUserDataByFilter} = require("./controller/user.controller")

const Port = 3000;
// console.log("h")
app.get("/users" , getUserData)
app.get("/users/search", getUserDataByFilter)
app.get("/users/:uuid" , getUserDataByUiid)
// console.log(process.env)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${Port}`)
})

