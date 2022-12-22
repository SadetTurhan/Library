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
  myLibrary.push(bookName,bookAuthor,bookPages,bookRead);
};


function addCard(){
    let card = document.createElement("div");
    let cardName = document.createElement("p");
    cardName.innerText = document.getElementById("name_of_book").value;
    let cardAuthor = document.createElement("p");
    cardAuthor.innerText = document.getElementById("author_of_book").value;
    let cardPage = document.createElement("p");
    cardPage.innerText = document.getElementById("page_number").value;
    let cardRead = document.createElement("p");
    if(cardRead == "on"){
        cardRead.innerText = "has been read";
    }else{
        cardRead.innerText = "has not been read";
    }
    card.appendChild(cardName);
    card.appendChild(cardAuthor);
    card.appendChild(cardPage);
    card.appendChild(cardRead);
    document.body.appendChild(card);
};




let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addBookToLibrary);
addButton.addEventListener("click",addCard);

