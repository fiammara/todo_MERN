const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Archive = new Schema(
    {
        name: { type: String, required: true },
        
    },
    { timestamps: true },
    

)




module.exports = mongoose.model('archive', Archive, 'archive')
