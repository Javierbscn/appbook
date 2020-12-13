import BookService from './services/BookService';
const bookService = new BookService();

export default class UI {
	async renderBooks() {
		const books = await bookService.getBooks();
		return books;
	}

	async addNewBook(book) {
		const response = await bookService.postBook(book);
		this.renderBooks();
		return response;
	}
}