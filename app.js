const express = require("express");
const Collection = require("./mongo");
const cors = require("cors")
const http = require("http");

const port = process.env.PORT;
const app = express();


app.get("/",cors(),(req,res)=>{

})
app.post("/",async(req,res)=>{
    const {username,email,pass} = req.body;
    try{
        const check = await Collection.findOne({email: email})
        if(check){
            res.json("exit")
        }
        else{
            res.json("notexit")
        }
    }
    catch(e){
console.log(e);
    }
})
app.post("/singup",async(req,res)=>{
    const {username,email,pass} = req.body;
    const data={
        email: email,
        pass : pass
    }
    try{
        const check = await Collection.findOne({email: email})
        if(check){
            res.json("exit")
        }
        else{
            res.json("notexit")
            await Collection.insertMany([data])
        }
    }
    catch(e){
console.log(e);
    }
})



const server = http.createServer(app);
server.listen(8000, () => {
    console.log("Listening on port " + port);
});