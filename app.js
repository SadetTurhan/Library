// Declare empty array for library
let myLibrary = [];
class Book {
  constructor(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
  }
}

function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooksOnPage();
}

function displayBooksOnPage() {
  const books = document.querySelector(".books");

  const removeDivs = document.querySelectorAll(".card");
  console.log(
    "show me the node count of current DOM card divs....",
    removeDivs
  );
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  let index = 0;
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove From Library";
    console.log(
      "show me my current array objects inside of foreach....",
      myLibrary
    );

    removeBookButton.dataset.linkedArray = index;
    console.log(
      "show me the dataset link back to the array....",
      removeBookButton.dataset.linkedArray
    );
    card.appendChild(removeBookButton);

    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      console.log(
        "Attempting to remove array item via data attribute....",
        parseInt(retrieveBookToRemove)
      );
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }

    const readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    readStatusButton.textContent = "Toggle Read Status";

    readStatusButton.dataset.linkedArray = index;
    console.log(
      "show me the dataset link back to the array FOR READ STATUS BUTTON....",
      readStatusButton.dataset.linkedArray
    );
    card.appendChild(readStatusButton);

    readStatusButton.addEventListener("click", toggleReadStatus);

    function toggleReadStatus() {
      let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleBook = new Book();
      console.log(
        "What is the toggle initial value?...",
        myLibrary[parseInt(retrieveBookToToggle)].Read
      );

      if (myLibrary[parseInt(retrieveBookToToggle)].Read == "Yes") {
        toggleBook.Read = "No";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      } else if (myLibrary[parseInt(retrieveBookToToggle)].Read == "No") {
        toggleBook.Read = "Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      }
      displayBooksOnPage();
    }

    for (let key in myLibrarys) {
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }

    index++;
  });
}

const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

function intakeFormData() {
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;


  if (Title == "" || Author == "" || Pages == "" || Read == "") {
    return;
  }

  addBookToLibrary(Title, Author, Pages, Read);
  document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}

const constraintValidationAPI = (() => {
  const valTitle = document.getElementById("Title");

  valTitle.addEventListener("input", () => {
    valTitle.setCustomValidity("");
    valTitle.checkValidity();
  });

  valTitle.addEventListener("invalid", () => {
    if (valTitle.value === "") {
      valTitle.setCustomValidity("Title cannot be blank!");
    }
  });

  const valAuthor = document.getElementById("Author");

  valAuthor.addEventListener("input", () => {
    valAuthor.setCustomValidity("");
    valAuthor.checkValidity();
  });

  valAuthor.addEventListener("invalid", () => {
    if (valAuthor.value === "") {
      valAuthor.setCustomValidity("Author cannot be blank!");
    }
  });
})();