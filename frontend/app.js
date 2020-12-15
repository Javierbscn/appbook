import UI from './UI';
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
	ui.renderBooks();
});

document.getElementById("image").addEventListener('change', (e) => {
	let fileName = e.target.value.split('\\').pop();
    document.querySelector(".custom-file-label").innerHTML = fileName;
})

document.addEventListener('submit', async (e) => {
	if (e.target.matches('#book-form')) {
		e.preventDefault();
		const $nameBook = document.getElementById('name').value,
			$authorBook = document.getElementById('author').value,
			$isbnBook = document.getElementById('isbn').value,
			$img = document.getElementById('image').files;
		
		if ($nameBook.length < 1 || $authorBook.length < 4 || $isbnBook.length < 1 || $img.length === 0) {
			ui.renderMessage('Datos inválidos, por favor rellena correctamente los campos', 'danger');
			return;
		}

		const formData = new FormData();
		formData.append('title', $nameBook);
		formData.append('author', $authorBook);
		formData.append('isbn', $isbnBook);
		formData.append('image', $img[0]);

		const response = await ui.addNewBook(formData);
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