function findAccountById(accounts, id) {
  return accounts.find((user) => user.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let accID = account.id
  return books.reduce((total, book) => {
     const {borrows} = book
    for (let borrow of borrows){
      if (borrow.id === accID){total++} 
    }
    return total
  },0)
}

function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => {
    book["author"] = authors.find((author) => author.id === book.authorId);
        return book;}));
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
