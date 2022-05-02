const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String
    },
    new:{
        type:Boolean
    },
    imageUrl:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    showImage:{
        type:Array
    },
    type:{
        type:Array
    }
} , {
    collection:'products'
});

module.exports = mongoose.model('Products' , productSchema);