let myLibrary = [];


function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
 };
function addBookToLibrary(title,author,pages,read){
  var title = document.getElementById("name_of_book").value;
  var author = document.getElementById("author_of_book").value;
  var pages = document.getElementById("page_number").value;
  var read = document.getElementById("read_status").checked;
  const book = new Book(title,author,pages,read);
  myLibrary.push(book);
}

  function addCard(){
  let card = document.createElement("div");
  card.classList.add("card");
  let cardName = document.createElement("p");
  cardName.innerText = myLibrary.slice(-1)[0].title;
  cardName.setAttribute("id","items1");
  let cardAuthor = document.createElement("p");
  cardAuthor.innerText = myLibrary.slice(-1)[0].author;
  cardAuthor.setAttribute("id","items2");
  let cardPage = document.createElement("p");
  cardPage.innerText = myLibrary.slice(-1)[0].pages;
  let cardRead = document.createElement("p");
  cardPage.setAttribute("id","items3");
  if(myLibrary.slice(-1)[0].read === true){
    cardRead.innerText = "Has been read";
  }else{
    cardRead.innerText = "Has not been read";
  };
  cardRead.setAttribute("id","items4");
  card.appendChild(cardName);
  card.appendChild(cardAuthor);
  card.appendChild(cardPage);
  card.appendChild(cardRead);
  let cardArea = document.getElementById("cardArea");
  document.body.appendChild(card);
  cardArea.appendChild(card);
  
  
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "delete";
  card.appendChild(deleteButton);
function deleteBook(){
  card.remove();
}
  deleteButton.addEventListener("click",deleteBook);
};

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addBookToLibrary);
addButton.addEventListener("click",addCard);

