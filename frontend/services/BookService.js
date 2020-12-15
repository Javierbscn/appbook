export default class BookService {
	constructor() {
		this.Url = 'http://localhost:3000/api/books';
	}

	async getBooks() {
		const response = await axios(this.Url);
		const books = await response;
		return books;
	}

	async postBook(book, progressbar) {
		const response = await axios.post(this.Url, book, {
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress(file) {
				let progress = (file.loaded * 100) / file.total;
				progressbar.setAttribute('value', progress);
			}
		});
		return response.data;
	}

	async deleteBook(bookId) {
		const response = await axios.delete(`${this.Url}/${bookId}`);
		return response.data;
	}
}