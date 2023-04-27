const mongoose=require('mongoose')
const {Schema} =mongoose


const adminSchema=new Schema({
    area: String,
    cc: String,
  nombre:String,
  producto:String,
    create_at: {
        type:Date,
        default: Date.now
    }
})



module.exports=mongoose.model('adminL',adminSchema)

