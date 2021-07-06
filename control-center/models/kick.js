const mongoose = require('mongoose')

const kickSchema  = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['Resource', 'Image', 'GIF', 'News', 'Tweet', 'Hack', 'Meme', 'Quote', 'Article', 'Fact']
    },
    text: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    tool:{
        image: {type: String},
        text: {type: String},
        link: {type: String},
        linkPreview: {type: String}
    },
    image: {
        type: String
    },
    linkSource: {
        image: {type: String},
        link: {type: String},
        linkPreview: {type: String},
        text: {type: String}
    },
    time:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Kick', kickSchema) 