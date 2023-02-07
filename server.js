const express = require('express')
const mongoose = require('mongoose')
const fruit = require('./fruit')

const app = express()
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/amar").then(() => {
    console.log("data base connection is set correctly")
})
app.get('/', (req, res) => {
    res.send("welcome to my channel")

})
app.get('/amar', async (req, res) => {
    const fr = await fruit.create({
      name: "G.v.amarnathreddy"  
    })
    res.json (fr)
    console.log(fr)
}

)

app.get('/niketan', (req, res) => {
    res.send("hello nik")
})

app.listen(4000, () => {
    console.log("server is running")
})