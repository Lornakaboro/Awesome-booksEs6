import navSection from './modules/navigation.js';
import displaybooks from './modules/displaybooks.js';
import bookData from './modules/bookClass.js';
import { DateTime } from './modules/luxon.js';
import { addBook, getBookFromLocalStorage } from './modules/localstorage.js';

document.addEventListener('DOMContentLoaded', () => {
  navSection();
  displaybooks();
});

// add-book
const addBtn = document.getElementById('addButton');
addBtn.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  bookData.bookObj(title.value, author.value);
  addBook();
});

if (localStorage.getItem('storedBooks') == null) {
  addBook();
} else {
  getBookFromLocalStorage();
}

const localDatetime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

const currentDate = document.querySelector('.date');
currentDate.textContent = localDatetime;
