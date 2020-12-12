const Book = require('../models/Book'),
	{ Router } = require('express'),
	router = Router();

router.get('/', async (req, res) => {
	const books = await Book.find();
	res.json(books);
});

router.post('/', async (req, res) => {
	const { title, author, isbn } = req.body;
	// const image_url = '/uploads/' + req.file.filename;
	const newBook = new Book({ title, author, isbn });
	await newBook.save();

	res.json({ message: 'Book added' });
});

module.exports = router;