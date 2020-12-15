const Book = require('../models/Book'),
	cloudinary = require('cloudinary').v2,
	{ Router } = require('express'),
	{ unlink } = require('fs-extra'),
	router = Router();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})

router.get('/', async (req, res) => {
	const books = await Book.find();
	res.json(books);
});

router.post('/', async (req, res) => {
	const { title, author, isbn } = req.body;
	const result = await cloudinary.uploader.upload(req.file.path);
	const newBook = new Book({ 
		title,
		author,
		isbn,
		image_path: result.secure_url,
		public_id: result.public_id
	});

	await newBook.save();
	await unlink(req.file.path);

	res.json({ message: 'Libro añadido' });
});

router.delete('/:id', async (req, res) => {
	const bookDeleted = await Book.findByIdAndDelete(req.params.id);

	const result = await cloudinary.uploader.destroy(bookDeleted.public_id)

	if(result.result === 'ok') res.json({ message: 'Libro eliminado correctamente' });
	else res.json({ message: 'Fallo al eliminar libro!' });
});

module.exports = router;