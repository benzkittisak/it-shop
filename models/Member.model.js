const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    fname:{
        type:String
    } , 
    lname:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
} , {
    collection:'member'
});

module.exports = mongoose.model("Members" , memberSchema);