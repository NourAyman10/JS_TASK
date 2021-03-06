class Book {
    constructor(author, bookName,numberOfPages, readIt) {
        this.author = author;
        this.bookName = bookName;
        this.readIt = readIt;
        this.numberOfPages = numberOfPages;
    } 
}


let bookID = 0;
function addBook(Book) {
    bookID++;
    let container = document.querySelector(".containerOfBookses");
    
    container.innerHTML += `
    <div class="book${bookID}" id="currentBook">
            <h2 class="author-name">Author name</h2>
            <p class="authorName">${Book.author}</p>

            <h2 class="book-name">Book Name</h2>
            <p class="bookName">${Book.bookName}</p>

            <h2 class="pagesNumber">Number of Pages</h2>
            <p class="bookName">${Book.numberOfPages}</p>

            <div class="read-it-container">
                <h2 class="read-it">Read it ?</h2>
                <input type="checkbox" name="" id="read-it" ${Book.readIt}>
            </div>

            <button class="delete" id="book${bookID}" onclick="removeBook(this.id)">Delete</button>
    </div> 
    `;

}

function createBook() {
    let authorName = document.getElementById("author").value;
    let bookName = document.getElementById("book").value;
    let readIt = document.getElementById("read").value;
    let numberOfPages = document.getElementById("numberOfPages").value;

    if(authorName=="" || bookName == "")
    {
        alert("Please fill all inputs");

    }
    else{
        if(readIt.checked) {
            readIt = "checked";
        }
        else {
            readIt = "unchecked";
        }
    
        const book = new Book(authorName,bookName,numberOfPages,readIt);
        console.log(readIt);
    
        addBook(book);
    }

    

}

function removeBook(id) {
    let myID = "."+id;
    let x = document.querySelector(myID);
    x.remove();
}

