const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    state_name: {type: String, required: true, },
},{ timestamps:true })

const DistrictSchema = new Schema({
    state_id: {type: Schema.Types.ObjectId, ref:"state"},
    district_name: {type: String, required: true, },
},{ timestamps:true })

const ChildSchema = new Schema({
    name: {type: String, required: true },
    sex: {type: String, required: true },
    dob: {type: Date, required: true },
    father_name: {type: String, required: true },
    mother_name: {type: String, required: true },
    photo: {type: String },
    district_id: {type: Schema.Types.ObjectId, ref:"district"},
},{ timestamps:true })


State = mongoose.model("state", StateSchema); 
District = mongoose.model("district", DistrictSchema); 
Child = mongoose.model("child", ChildSchema); 


module.exports={ 
    State,
    District,
    Child
}