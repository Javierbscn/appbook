const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    author: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    isbn: { type: true },
    image_path: { type: String },
    title: { type: String, required: true }
})

module.exports = model('Book', BookSchema)