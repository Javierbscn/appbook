import UI from './UI';
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
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

		const response = await ui.addNewBook(formData, $imgProgressbar);
		ui.renderMessage(response.message, 'success');
	}
});

document.addEventListener('click', async (e) => {
	if(e.target.matches('.delete')) {
		e.preventDefault();
		const response = await ui.deleteBook(e.target.getAttribute('_id'));
		ui.renderMessage(response.message, 'danger');
	}
});