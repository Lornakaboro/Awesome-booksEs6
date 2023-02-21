import bookData from './bookClass.js';
import { addBook } from './localstorage.js';

const displaybooks = () => {
  const addedBooks = document.getElementById('books');
  addedBooks.innerHTML = '';
  if (bookData.bookList.length) {
    for (let i = 0; i < bookData.bookList.length; i += 1) {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('book-container');
      addedBooks.appendChild(bookContainer);

      const bookContainer2 = document.createElement('div');
      bookContainer2.classList.add('individual-book');
      bookContainer.appendChild(bookContainer2);

      const bookDetails = document.createElement('p');
      bookDetails.classList.add('book-details');
      bookDetails.textContent = `"${bookData.bookList[i].title}" by ${bookData.bookList[i].author}`;
      bookContainer2.appendChild(bookDetails);

      const removeButton = document.createElement('button');
      removeButton.classList.add('rmv-btn');
      removeButton.textContent = 'Remove';

      removeButton.onclick = () => {
        bookData.booksFilter(bookData.bookList[i]);
        addBook();
        displaybooks();
      };
      bookContainer2.appendChild(removeButton);
    }
  } else {
    const bookDetails = document.createElement('p');
    bookDetails.classList.add('no-books');
    bookDetails.textContent = 'No books added yet';
    addedBooks.appendChild(bookDetails);
  }
};

export default displaybooks;