const Book = require('../models/Book'),
	path = require('path'),
	{ Router } = require('express'),
	{ unlink } = require('fs-extra'),
	router = Router();

router.get('/', async (req, res) => {
	const books = await Book.find();
	res.json(books);
});

router.post('/', async (req, res) => {
	const { title, author, isbn } = req.body;
	const image_path = '/img-uploads/' + req.file.filename;
	const newBook = new Book({ title, author, isbn, image_path });

	await newBook.save();

	res.json({ message: 'Libro añadido' });
});

router.delete('/:id', async (req, res) => {
	const bookDeleted = await Book.findByIdAndDelete(req.params.id);

	unlink(path.resolve('./backend/public' + bookDeleted.image_path));

	res.json({ message: 'Libro eliminado correctamente' });
});

module.exports = router;