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
			$img = document.getElementById('image').files,
			$imgProgressbar = document.getElementById('image-progressbar');

		$imgProgressbar.classList.remove('d-none');

		const formData = new FormData();
		formData.append('title', $nameBook);
		formData.append('author', $authorBook);
		formData.append('isbn', $isbnBook);
		formData.append('image', $img[0]);

		const response = await ui.addNewBook(formData, $imgProgressbar);
		ui.renderMessage(response.message, 'success');
		$imgProgressbar.classList.add('d-none')
	}
});

document.addEventListener('click', async (e) => {
	if(e.target.matches('.delete')) {
		e.preventDefault();
		const response = await ui.deleteBook(e.target.getAttribute('_id'));
		ui.renderMessage(response.message, 'danger');
	}
});