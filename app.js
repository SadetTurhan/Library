const inputName = document.getElementById("name_of_book");
const inputAuthor = document.getElementById("author_of_book");
const inputPages = document.getElementById("page_number");
const inputRead = document.getElementById("read_status");

function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
 };
function addBookToLibrary(title,author,pages,read){
  let myLibrary = [];
  var title = inputName.value;
  var author = inputAuthor.value;
  var pages = inputPages.value;
  var read = inputRead.value;
  const book = new Book(title,author,pages,read);
  myLibrary.push(book);
}
function createCard(){
  const card = document.createElement("div");
  card.setAttribute("id","card");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardRead = document.createElement("p");
  cardTitle.textContent = inputName.value;
  card.appendChild(cardTitle);
  cardAuthor.textContent = inputAuthor.value;
  card.appendChild(cardAuthor);
  cardPages.textContent = inputPages.value;
  card.appendChild(cardPages);
  cardRead.textContent = inputRead.value;
  card.appendChild(cardRead);
  const cardArea = document.getElementById("cardArea");
  cardArea.appendChild(card);
  const deleteButton = document.createElement("button");
  card.appendChild(deleteButton);
  deleteButton.addEventListener("click",removeLocalTodos);
  deleteButton.addEventListener("click",deleteCard);
  saveLocalBook(inputAuthor.value);
  saveLocalBook(inputName.value);
  saveLocalBook(inputPages.value);
  saveLocalBook(inputRead.value);
  inputName.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
}
function deleteCard(){
  const card = document.getElementById("card");
  card.innerText = "";
}
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addBookToLibrary);
addButton.addEventListener("click",createCard);
document.addEventListener("DOMContentLoaded",getBook);
function saveLocalBook(book){
  //Check 
  let myLibrary;
  if (localStorage.getItem("myLibrary") === null){
      myLibrary = [];
  }else{
      myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
  myLibrary.push(book);
  localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
}

function removeLocalTodos(todo){
  let myLibrary;
  if (localStorage.getItem("myLibrary") === null){
      myLibrary = [];
  }else{
      myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
  const libraryIndex = myLibrary[0].innerText;
  myLibrary.splice(myLibrary.indexOf(libraryIndex),1);
  localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
}

function getBook(){
  let myLibrary;
  if (localStorage.getItem("myLibrary") === null){
      myLibrary = [];
  }else{
      myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
  myLibrary.forEach(function(book){
    const card = document.createElement("div");
    card.classList.add("card");
    const cardTitle = document.createElement("p");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("p");
    cardTitle.textContent = inputName.value;
    card.appendChild(cardTitle);
    cardAuthor.textContent = inputAuthor.value;
    card.appendChild(cardAuthor);
    cardPages.textContent = inputPages.value;
    card.appendChild(cardPages);
    cardRead.textContent = inputRead.value;
    card.appendChild(cardRead);
    const cardArea = document.getElementById("cardArea");
    cardArea.appendChild(card);
    const deleteButton = document.createElement("button");
    card.appendChild(deleteButton);
    deleteButton.addEventListener("click",removeLocalTodos);
    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
  })
}