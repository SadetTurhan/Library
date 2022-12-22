let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
};

function addBookToLibrary(Book) {
  const BookInfo = Object.values(Book)
  myLibrary.push(BookInfo);
};

const book1 = new Book("a",2,"3","4");
addBookToLibrary(book1)
