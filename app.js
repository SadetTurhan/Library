let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;

  displayBooks();
}

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${i})">Remove</button>
      <button onclick="toggleRead(${i})">Toggle Read</button>
    `;

    bookList.appendChild(bookCard);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', function() {
  const form = document.getElementById('new-book-form');
  form.classList.toggle('hidden');
});

document.getElementById('book-form').addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
});
