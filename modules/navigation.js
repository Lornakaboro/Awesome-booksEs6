// navigation

const navSection = () => {
  const formContainer = document.querySelector('.form-container');
  const lists = document.querySelector('.lists');
  const addNew = document.querySelector('.add-new');
  const mainTitle = document.querySelector('.main-title');
  const mainTitleHidden = document.querySelector('.main-title-hidden');
  const logo = document.querySelector('.logo');
  const contact = document.querySelector('.contacts');
  const contacts = document.querySelector('.contact-info');
  const addedBooks = document.getElementById('books');
  const noAddedBooks = document.querySelector('no-books');

  formContainer.style.display = 'none';

  logo.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    addedBooks.style.display = 'block';
    formContainer.style.display = 'none';
    mainTitle.textContent = 'All awesome books';
  });

  lists.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    addedBooks.style.display = 'block';
    formContainer.style.display = 'none';
    mainTitle.textContent = 'All awesome books';
    contacts.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    mainTitleHidden.style.display = 'none';
    addedBooks.style.display = 'none';
    formContainer.style.display = 'flex';
    contacts.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    contacts.style.display = 'block';
    formContainer.style.display = 'none';
    mainTitleHidden.style.display = 'none';
    noAddedBooks.style.display = 'none';
  });
};

export default navSection;