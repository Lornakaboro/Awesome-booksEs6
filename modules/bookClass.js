class BookObject {
  constructor(array) {
    this.bookList = array;
  }

  bookObj(bookTitle, authorName) {
    const books = {
      title: bookTitle,
      author: authorName,
    };
    this.bookList.push(books);
  }

  booksFilter(books) {
    this.bookList = this.bookList.filter((book) => book !== books);
  }
}

const bookData = new BookObject([]);

export default bookData;