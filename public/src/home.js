function getTotalBooksCount(books) {
return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 return books.reduce((total, book) => {
   if(book.borrows[0].returned === false){return total += 1}
    return total}, 0)}
    
function getMostCommonGenres(books) {
  let sortedArray = []
  let genreObj = {}
  let finalArray = []
  for (let current in books){
    genre = books[current].genre
    if(genreObj[genre]){
      genreObj[genre] += 1
    } else{
      genreObj[genre] = 1
    }
  }
  for (let genre in genreObj){
    sortedArray.push({name:genre, count:genreObj[genre]})
  }
  sortedArray.sort((genreA, genreB) => genreA.count < genreB.count ? 1:-1)
  for (let i = 0; i < 5; i++){
    finalArray.push(sortedArray[i])
  }
  return finalArray
}

function getMostPopularBooks(books) {
  let popBooks = []
    for(let book of books){
  let title = book.title
  let popularity = book.borrows.length
  book = {name:title, count:popularity}
  popBooks.push(book)
}
popBooks.sort((bookA, bookB) => bookA.count < bookB.count ? 1:-1)
return popBooks.slice(0,5)
}

function _incrementID(id, amount, array){
  array.forEach((author)=>{
    if(author.id === id){
      author.count+=amount
    }
  })
}
function getMostPopularAuthors(books, authors) {
  let authorList = []
  let topFiveAuthors = []
  for (let author in authors){
    const thisAuthor = authors[author]
    authorList.push({name:`${thisAuthor.name.first} ${thisAuthor.name.last}`, count:0, id:thisAuthor.id})
  }
  books.forEach((book)=>_incrementID(book.authorId, book.borrows.length, authorList))
  authorList.sort((firstAuthor, secondAuthor) => firstAuthor.count < secondAuthor.count ? 1:-1)
  for(let i = 0; i < 5; i++){
    topFiveAuthors.push({name:`${authorList[i].name}`, count:authorList[i].count})
  }
  return topFiveAuthors
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
