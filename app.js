let myLibrary = [];

let booksadded = document.getElementById('[data-id="book1"]')
const add = document.querySelector('[data-id="add"]')
const addbutton = document.getElementById('add')
const erasebutton = document.getElementById('erase')
const erase = document.querySelector('[data-id="erase"]')
const addedbooks = document.getElementsByClassName('addedbook')

var Book = function() {
    let name = bookname;
    let author = bookauthor;
  };

function addBookToLibrary() {
    addbutton.addEventListener('click', () => {
        myLibrary.pop(0);
        myLibrary.pop(1);
        var bookname = document.getElementById('name').value
        var bookauthor = document.getElementById('author').value
        myLibrary[name] = myLibrary.push(bookname);
        myLibrary[author] = myLibrary.push(bookauthor); 
        });
};


function showbook() {
    addbutton.addEventListener('click', () => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','newbook');
    const newContent = document.createTextNode(myLibrary);
    newDiv.append(newContent);
    const currentDiv = document.getElementById('[data-id="book1"]');
    document.body.insertBefore(newDiv, currentDiv);
    });
}

addBookToLibrary();
showbook();

erasebutton.addEventListener('click', (event) => {
    erasebutton.textContent = `Click count: ${event.detail}`;
});

