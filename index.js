const express = require("express")
const app = express()
const {getUserData ,getUserDataByUiid, getUserDataByFilter} = require("./controller/user.controller")

const PORT = 3000;
// console.log("h")
app.get("/users" , getUserData)
app.get("/users/search", getUserDataByFilter)
app.get("/users/:uuid" , getUserDataByUiid)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})