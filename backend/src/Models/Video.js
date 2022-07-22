const mongoose = require('mongoose')

// mongoose.Schema() -> maneira de como os dados são organizados no banco de ddos, abstraindo a criação no banco de dados para um ojb javascript

const videoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type:String,
        required:true,
    },
    link: {
        type: String,
        required: true,
    }, 
    liked: {
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model("Video",videoSchema )