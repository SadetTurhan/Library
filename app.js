let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
};



function addBookToLibrary(Book){
  myLibrary.pop();
  myLibrary.pop();
  myLibrary.pop();
  myLibrary.pop();
  var bookName = document.getElementById("name_of_book").value;
  var bookAuthor = document.getElementById("author_of_book").value;
  var bookPages = document.getElementById("page_number").value;
  var bookRead = document.getElementById("items4");
  myLibrary.push(bookName,bookAuthor,bookPages,bookRead);
};



function addCard(){
  let card = document.createElement("div");
  card.classList.add("card");
  let cardName = document.createElement("p");
  cardName.innerText = document.getElementById("name_of_book").value;
  cardName.setAttribute("id","items1");
  let cardAuthor = document.createElement("p");
  cardAuthor.innerText = document.getElementById("author_of_book").value;
  cardAuthor.setAttribute("id","items2");
  let cardPage = document.createElement("p");
  cardPage.innerText = document.getElementById("page_number").value + " pages";
  cardPage.setAttribute("id","items3");
  let cardRead = document.createElement("p");
  cardRead.innerText = document.getElementById("read_status").value;
  if(cardRead == "on"){
      cardRead.innerText = "has been read";
  }else{
      cardRead.innerText = "has not been read";
  }
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
