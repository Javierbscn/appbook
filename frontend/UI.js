import BookService from './services/BookService';
const bookService = new BookService(),
	{ format } = require('timeago.js');

export default class UI {
	async renderBooks() {
        this.showLoader();
		const books = await bookService.getBooks(),
			$bookCards = document.getElementById('book-cards'),
			$div = document.createElement('div');
		$bookCards.innerHTML = null;

		books.forEach((book) => {
			$div.innerHTML += `<div class="card p-3 my-3">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${book.image_path}" class="img-fluid" alt="${book.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-block">
                            <h3 class="card-title">${book.title}</h3>
                            <p class="card-text">Autor: ${book.author}</p>
                            <p class="card-text">ISBN: ${book.isbn}</p>
                            <a href="#" class="btn btn-danger delete" _id="${book._id}">Eliminar</a>
                        </div>
                        <div class="card-footer mt-3">
                            <p class="text-muted">${format(book.created_at)}</p>
                        </div>
                    </div>
                </div>
            </div>`;
		});
        $bookCards.appendChild($div);
        this.showLoader();
	}

	async addNewBook(book) {
        this.showLoader();
		const response = await bookService.postBook(book);
        this.renderBooks();
        this.showLoader();
        this.clearBookForm();
		return response;
	}
    
    async deleteBook(bookId) {
        this.showLoader();
        const response = await bookService.deleteBook(bookId);
        this.renderBooks();
        this.showLoader();
        return response;
    }

    clearBookForm() {
		document.getElementById('book-form').reset();
    }

    renderMessage(message, colorMessage) {
        const $container = document.querySelector('.col-md-4'),
            $card = document.querySelector('.card'),
            $div = document.createElement('div');

        $div.className = `alert alert-${colorMessage} message`;
        $div.appendChild(document.createTextNode(message));
        
        $container.insertBefore($div, $card);

        setTimeout(() => {
            document.querySelector('.message').remove();
        }, 3000);
    }

    showLoader() {
        document.querySelector('.loader').classList.toggle('d-none');
    }
}