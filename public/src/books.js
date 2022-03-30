function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let onLend = books.filter((book) => !book.borrows[0].returned)
  let onShelves = books.filter((book) => book.borrows[0].returned)
  let bookStatus = [onLend, onShelves]
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let output = []
  let returnlist = []
  for(let borrow in borrows){
    for(let account in accounts){
      if(borrows[borrow].id===accounts[account].id){
       
        accounts[account].returned = borrows[borrow].returned
        output.push(accounts[account])
      }
    }
  }
  for(let i=0;i<10;i++){
    if(output[i]){returnlist.push(output[i])}
  }
  return returnlist

}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};