const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    author: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    isbn: { type: String, required: true },
    image_path: { type: String },
    public_id: { type: String },
    title: { type: String, required: true }
})

module.exports = model('Book', BookSchema)