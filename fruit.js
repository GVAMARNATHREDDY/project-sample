const mongoose=require('mongoose')


const fruitSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }

})
module.exports=mongoose.model('fruit',fruitSchema)