const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,
    },
    to : {
        type : String,
        required : true,
    },
    msg : {
        type : String,
        maxLength : 50,
    },
    created_at : {
        type : Date,
        required : true,
    }   
});

//after schema u should create model to the mongose.
const Chat = mongoose.model("Chat" ,chatSchema);

//next as it is not the main page . its better to write the export statement to import to the main page
module.exports = Chat;