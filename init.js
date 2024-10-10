const mongoose = require("mongoose");
const Chat = require("./models/mod1.js");

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

// the main purpose of the init.js is to create some sample data inside the database
let allChats = [{
    from : "sai",
    to : "eswar",
    msg : "jai ntr",
    created_at : new Date(),
},
{
    from : "arjun",
    to : "sai",
    msg : "Hey, did you finish the project?",
    created_at : new Date(),
},
{
    from : "sai",
    to : "arjun",
    msg : "Almost done! Just need to polish a few things.",
    created_at : new Date(),
},
{
    from : "eswar",
    to : "arjun",
    msg : "Lets catch up tomorrow about the presentation.",
    created_at : new Date(),
},
{
    from : "arjun",
    to : "eswar",
    msg : "Sure, Ill be there by 10 AM.",
    created_at : new Date(),
}]

Chat.insertMany(allChats);