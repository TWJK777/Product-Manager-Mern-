const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    producttitle : {
        type: String,
        required: [true, "It is required"],
        minlength: [3, "It must be at least 3 characters long"]
    },
    productprice : {
        type: Number,
        required: [true, "It is required"],
        minlength: [3, "It must be at least 3 characters long"]
    },

    productdescription : {
        type: String,
        required: [true, "It is required"],
        minlength: [3, "It must be at least 3 characters long"]
    }


}, {timestamps : true})


module.exports.Product = mongoose.model('Product', ProductSchema)