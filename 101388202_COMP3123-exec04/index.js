var express = require('express')

const SERVER_PORT = 8089
var app = express()

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//http://localhost:8089/
app.get("/", (req, res) => {
    //res.status(201).send("<h1>Welcome to Express Server</h1>")
    res.send("<h1>Lab 04 Exercise</h1>")
    res.end()
})

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    //res.status(201).send("<h1>Welcome to Express Server</h1>")
    res.send("<h1>Hello Express JS</h1>")
    res.end()
})

//http://localhost:8089/user
app.get("/user", (req, res) => {
    const p = {
        ufnm: "Pritesh",
        ulnm: "Patel"
    }
    res.json(p)
})

//http://localhost:8089/user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const p = {
        ufnm: "Pritesh",
        ulnm: "Patel"
    }
    res.json(p);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})