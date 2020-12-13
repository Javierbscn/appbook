import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
	const ui = new UI();
	ui.renderBooks();
});

document.addEventListener('submit', async (e) => {
	if (e.target.matches('#book-form')) {
		e.preventDefault();
		const $nameBook = document.getElementById('name').value,
			$authorBook = document.getElementById('author').value,
			$isbnBook = document.getElementById('isbn').value,
			$img = document.getElementById('image').files;

		const formData = new FormData();
		formData.append('title', $nameBook);
		formData.append('author', $authorBook);
		formData.append('isbn', $isbnBook);
		formData.append('image', $img[0]);

		const ui = new UI();
		const message = await ui.addNewBook(formData);
		console.log(message);
	}
});

document.addEventListener('click', (e) => {});