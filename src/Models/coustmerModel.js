const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:String,
            required:true
        }
    },
    Category:{
        type: String,
        required: true,
        enum: ["Regular", "Gold", "Platinum"]
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:15
    }
},{timestamps:true})

module.exports = mongoose.model('customer',customerSchema)