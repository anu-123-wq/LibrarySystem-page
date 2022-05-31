const users = ["user1", "user2", "user3", "user4", "user5", "user6"];
const infoTable = document.querySelector("#info-table");
const userNameElement = document.querySelector("#logged-in-user-name");
userNameElement.innerHTML = `No Users Logged In`;
const button = document.querySelector("#btn");
let globalUser = "";
const bookDetails = [
  {
    id: 1,
    title: "Design and analysis of Algorithm",
    author: "Deborata Paul",
    lender: "user1",
    borrower: "-",
  },
  {
    id: 2,
    title: "Compiler design",
    author: "Lipika Dewangan",
    lender: "user3",
    borrower: "user2",
  },
  {
    id: 3,
    title: "Software project management",
    author: "Santosh Swain",
    lender: "user5",
    borrower: "user3",
  },
  {
    id: 4,
    title: "cloud computing",
    author: "Roshini Pradhan",
    lender: "user1",
    borrower: "user4",
  },
  {
    id: 5,
    title: "Computer Network",
    author: "Jay Saraff",
    lender: "user1",
    borrower: "user3",
  },
  {
    id: 6,
    title: "Automata And Formal Language",
    author: "Suresh Chandra Moharana",
    lender: "user1",
    borrower: "user2",
  },
];
const renderTable = () => {
    // userNameElement.innerHTML = `No Users Logged In`;
  infoTable.innerHTML = `<thead>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Lender</th>
        <th>Borrower</th>
        <th>Action</th>
    </tr>
    </thead>`;
  bookDetails.forEach((book) => {
    infoTable.innerHTML += `<tdata>
    <td>${book.id}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.lender}</td>
              <td>${book.borrower}</td>
              <td>${
                book.lender === globalUser
                  ? "-"
                  : book.borrower === globalUser
                  ? "<button id='returnBook' onclick='returnBook(this)'>Return</button>"
                  : globalUser && book.borrower === "-"
                  ? "<button id='borrowBook' onclick='borrowBook(this)'>borrow</button>"
                  : "-"
              }</td>
              </tdata>`;
  });
  if (globalUser) {
    infoTable.innerHTML += `<tdata>
  <td>${bookDetails.length + 1}</td>
            <td><input id='title' type='text' placeholder='title'></td>
            <td><input id='author' type='text' placeholder='Author'></td>
            <td>${globalUser}</td>
            <td>-</td>
            <td><button id='borrowBook' onclick='addBook()'>Add book</button></td>
            </tdata>`;
  }
};
renderTable();

const changeLoggedInUser = () => {
  const user = document.querySelector("#logged-user").value;
  globalUser = user;
  if (users.includes(user)) {
    userNameElement.innerText = `Logged In User: ${user}`;
    renderTable();
  } else {
    alert("User not found");
  }
};

const borrowBook = (node) => {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = bookDetails.findIndex((book) => book.id === bookId);
  bookDetails[bookIndex].borrower = globalUser;

  renderTable();
};

const returnBook = (node) => {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = bookDetails.findIndex((book) => book.id === bookId);
  bookDetails[bookIndex].borrower = "-";
  renderTable();
};

const addBook = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const book = {
    id: bookDetails.length + 1,
    title: title,
    author: author,
    lender: globalUser,
    borrower: "-",
  };
  if (title && author) {
    bookDetails.push(book);
  } else {
    alert("Fill all the fields");
  }
  renderTable();
};

button.addEventListener("click", changeLoggedInUser);