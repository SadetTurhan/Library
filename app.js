let myLibrary = []

function Book(title,author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(){
  const newBook = new Book(document.getElementById('nameOfBook').value,document.getElementById('authorOfBook').value,document.getElementById('pagesOfBook').value,document.getElementById('readBook').value);
  myLibrary.unshift(newBook);
  console.log(myLibrary);
};
function createCard(){
  const bookArea = document.getElementById("bookArea");
  const displayTitle = document.createElement("p");
  displayTitle.innerText = myLibrary[0].title;
  const displayAuthor = document.createElement("p");
  displayAuthor.innerText = myLibrary[0].author;
  const displayPages = document.createElement("p");
  displayPages.innerText = myLibrary[0].pages;
  const displayRead = document.createElement("p");
  displayRead.innerText = myLibrary[0].read;
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id","deleteButton");
  deleteButton.innerText = "delete";
  function removeCard(){
    displayTitle.remove()
    displayAuthor.remove()
    displayPages.remove()
    displayRead.remove()
    this.remove();
    myLibrary.pop(this)
  }
  deleteButton.addEventListener("click",removeCard)
  bookArea.classList.add("bookArea")
  bookArea.appendChild(displayTitle);
  bookArea.appendChild(displayAuthor);
  bookArea.appendChild(displayPages);
  bookArea.appendChild(displayRead);
  bookArea.appendChild(deleteButton);
}


const addButton = document.getElementById('addButton');
addButton.addEventListener('click',addBookToLibrary);
addButton.addEventListener("click",createCard);