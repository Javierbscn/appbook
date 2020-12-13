import BookService from './services/BookService';
const bookService = new BookService();

export default class UI {
	async renderBooks() {
		const books = await bookService.getBooks();
		return books;
	}
}