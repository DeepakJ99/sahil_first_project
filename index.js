const express = require('express')
const path = require('path')
const public = path.join(__dirname,'./public');
const app = express()

app.use(express.static(public))

const buses = [
    {
        name:"Bundelkhand bus service",
        cities:["Chhatarpur","Bhopal","Delhi"]
    },
    {
        name:"Golden bus service",
        cities:["Indore","Gwalior","Khajuraho","Delhi"]
    },{
        name:"Rai bus service",
        cities:["Bhopal","Gwalior","Katni","Chhatarpur"]
    }
]

app.get("/", (req,res)=>{
    res.sendFile("./index.html")
})

app.get("/search",(req,res)=>{
    var availBuses = []
    for(var i = 0;i<buses.length;i++){
        if(buses[i].cities.includes(req.query.source) && buses[i].cities.includes(req.query.dest)){
            availBuses.push(buses[i].name)
        }
    }
    res.send(availBuses)
})

app.listen(3000, ()=>{
    console.log("Listening on port")
})