const stockList = (listOfArt, listOfCat) => {
  let codeTotals = {}
  let finalResult = ""

  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return ""
  }
  listOfArt.forEach((book) => {
    console.log(book.split(" ")[1])
    if (book.split(" ")[0][0] in codeTotals) {
      codeTotals[book.split(" ")[0][0]] += parseInt(book.split(" ")[1])
    } else {
      codeTotals[book.split(" ")[0][0]] = parseInt(book.split(" ")[1])
    }
  })
  listOfCat.forEach((letter) => {
    if (!(letter in codeTotals)) {
      codeTotals[letter] = 0
    }
  })
  listOfCat.forEach((letter) => {
    finalResult += `(${letter} : ${codeTotals[letter]}) - `
  })
  return finalResult.slice(0, -3)
}
console.log(stockList([], ["A", "B", "C", "D"]))
module.exports = stockList
