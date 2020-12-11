const Book = require('../models/Book'),
	{ Router } = require('express'),
	router = Router();

router.get('/', async (req, res) => {
	const books = await Book.find();
	res.json(books);
});

module.exports = router;