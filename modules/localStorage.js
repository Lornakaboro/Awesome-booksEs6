import bookData from './bookClass.js';

const addBook = () => {
  const stringifyArray = JSON.stringify(bookData.bookList);
  localStorage.setItem('storedBooks', stringifyArray);
};

const getBookFromLocalStorage = () => {
  const stringifyArray = localStorage.getItem('storedBooks');
  bookData.bookList = JSON.parse(stringifyArray);
};

export { addBook, getBookFromLocalStorage };