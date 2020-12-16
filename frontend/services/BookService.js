export default class BookService {
	constructor() {
		this.Url = '/api/books';
	}

	async getBooks() {
		const response = await fetch(this.Url);
		const books = await response.json();
		return books;
	}

	async postBook(book) {
		const response = await fetch(this.Url, {
			method: 'POST',
			body: book
		});
		return response.json();
	}

	async deleteBook(bookId) {
		const response = await fetch(`${this.Url}/${bookId}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		return response.json();
	}
}