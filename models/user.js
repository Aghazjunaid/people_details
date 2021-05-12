const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, },
    password: {type: Number, required: true },
},{ timestamps:true })


User = mongoose.model("user", UserSchema); 
// user will be fields in our database

module.exports={ 
    User
}