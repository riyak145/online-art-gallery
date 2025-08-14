const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const DATA_FILE = path.join(__dirname, "datafile.json");

app.use(express.urlencoded({ extended: true })); // handles form‑urlencoded bodies
app.use(express.json());                         


app.use(express.static(path.join(__dirname))) //to access static file(herewe have external css)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"))
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"signup.html"))
})

app.post("/signup",(req,res)=>{
    const userdata = req.body
    fs.appendFile("datafile.json", `${JSON.stringify(userdata)}\n`, (err) => {
        if(err) console.log(err)
            else console.log("done")
    })

})

app.listen(8080,()=>{
    console.log("running")
})