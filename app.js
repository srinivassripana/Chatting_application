const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/mod1.js");
const methodOverride = require("method-override")

//created view for template
app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}))
app.use(methodOverride("_method"))

//mongooes connection return promise to extract the data from the promise we used this approch
main()
    .then(()=>{
        console.log("jai ntr");
    })
    .catch(()=>{
        console.log("failed");
    })

async function main(){
    await mongoose.connect("mongodb://localhost:27017/chat")
}

//as the database is structured in the previous file here we store the data in it 
let chat1 = new Chat({
    from: "saisrinivas",
    to : "eswar",
    msg : "let start the hunt",
    created_at : new Date(),
});

//just filling the data is not enough . to show it in the collections we need to save the data cause we are sending the data individually
chat1.save().then((res)=>{
    console.log(res);
})

// index route (this is to show case the chats to the public by ejs template)
app.get("/chats" , async (req,res)=>{
    let ch =  await Chat.find();
    console.log(ch);
    res.render("index.ejs" , {ch})

})
//new route(to create a new chat with the new friend that makes the web page dynamic)
app.get("/chats/new" , (req,res)=>{
    res.render("new.ejs")
})

//create route(this route is to store the data that we recieve from the user. for this we use post request cause this handle the database)
app.post("/chats" , (req,res)=>{
    let {from , msg , to} = req.body;
    let newChat = new Chat({
        from : from ,
        msg : msg,
        to : to,
        created_at : new Date()
    });
    newChat.save()
        .then(res =>{
            console.log("its working..")
        })
        .catch(err=>{
            console.log(err)
        })
    res.redirect("/chats");    
})

//edit route (here we update or edit the message that we sent to the friend) for that we use the ger request as first we need to get the data
//here remeber that find is always a async function so we use async and await
app.get("/chats/:id/edit" , async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
})

//update route
app.put("/chats/:id" , async (req,res)=>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let edit_msg = await Chat.findByIdAndUpdate(id , {msg : newMsg});
    res.redirect("/chats");
})

//delete route
app.delete("/chats/:id" , async (req,res)=>{
    let {id} = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
})

// basic connection of the backend starts with the port declaration as express always listens first
app.listen(8080);

//route checking 
app.get("/" , (req,res)=>{
    res.send("working");
});