import BookService from './services/BookService';
const bookService = new BookService(),
    { format } = require('timeago.js');

export default class UI {
	async renderBooks() {
        const books = await bookService.getBooks(),
            $bookCards = document.getElementById('book-cards'),
            $div = document.createElement('div');
        $bookCards.innerHTML = null;

        books.forEach(book => {
            $div.innerHTML += `<div class="card mb-3">
                <div class="card-img">
                    <img src="http://localhost:3000${book.image_url}" class="card-img img-fluid" alt="${book.title}">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-text">Autor: ${book.author}</p>
                    <p class="card-text">ISBN: ${book.isbn}</p>
                    <a href="#" class="btn btn-danger delete" _id="${book._id}">Eliminar</a>
                    <div class="card-footer">
                        <p class="text-muted">${format(book.created_at)}</p>
                    </div>
                </div>
            </div>`;
        });
        $bookCards.appendChild($div)
	}

	async addNewBook(book) {
		const response = await bookService.postBook(book);
		this.renderBooks();
		return response;
    }
    
    clearBookForm() {
		document.getElementById('book-form').reset();
    }
    

}