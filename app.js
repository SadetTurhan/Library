let myLibrary = [];
let bookname = document.getElementById('name').value
let bookauthor = document.getElementById('author').value
let booksadded = document.getElementById('[data-id="book1"]')
const add = document.querySelector('[data-id="add"]')
const addbutton = document.getElementById('add')
const erasebutton = document.getElementById('erase')
const erase = document.querySelector('[data-id="erase"]')
const addedbooks = document.getElementsByClassName('addedbook')

function Book() {
  this.name = bookname;
  this.author = bookauthor;
}

function addBookToLibrary() {
    addbutton.addEventListener('click', (event) => {
        myLibrary.innerHTML = myLibrary.push(bookname);
        myLibrary.innerHTML = myLibrary.push(bookauthor);
        });
}

addBookToLibrary()

function showbook() {
    addbutton.addEventListener('click', (event) => {
        const newDiv = document.createElement("div");
     const newContent = document.createTextNode(myLibrary);
     newDiv.append(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    })
}

showbook()

erasebutton.addEventListener('click', (event) => {
    erasebutton.textContent = `Click count: ${event.detail}`;
});