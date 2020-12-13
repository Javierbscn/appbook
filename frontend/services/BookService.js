export default class BookService {
	constructor() {
		this.Url = 'http://localhost:3000/api/books';
	}

	async getBooks() {
		const response = await fetch(this.Url);
		const books = await response.json();
		return books;
	}
}