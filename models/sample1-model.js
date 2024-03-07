const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");


const sample1Schema = mongoose.Schema({

    fullName:{
        type:String,
        required: true,
    },

    age: {
        type: Number,
        required:true,
    }

});


module.exports = mongoose.model("Sample1",sample1Schema)