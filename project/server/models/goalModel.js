const { ObjectId } = require("mongodb");

const mongoose = require("mongoose");

const { Schema } = mongoose;

const goalSchema = new Schema({

user_id: mongoose.ObjectId,

title: String,

description: String,

deadline: Date,

steps: [

 {

title: String,

description: String,

status:{type:String, default:"Not-Started"},

deadline: Date,



 },

 ],

},{versionKey:false});




module.exports = mongoose.model("Goal", goalSchema);