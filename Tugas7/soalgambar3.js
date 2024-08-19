class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(this.title, this.author);
  }

  updateauthor(newauthor) {
    this.author = newauthor;
  }
}
const books = new book("javascript essentials", "jane Doe");

books.info();

books.updateauthor("john Doe");

books.info();



