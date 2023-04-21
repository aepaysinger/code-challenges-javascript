const stockList = (listOfArt, listOfCat) => {
  let codeTotals = {}
  let finalResult = ""

  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return ""
  }
  listOfArt.forEach((book) => {
    let bookCode = book.split(" ")[0][0]
    let bookNumber = book.split(" ")[1]
    if (bookCode in codeTotals) {
      codeTotals[bookCode] += parseInt(bookNumber)
    } else {
      codeTotals[bookCode] = parseInt(bookNumber)
    }
  })
  listOfCat.forEach((letter) => {
    if (!(letter in codeTotals)) {
      codeTotals[letter] = 0
    }
    finalResult += `(${letter} : ${codeTotals[letter]}) - `
  })

  return finalResult.slice(0, -3)
}

module.exports = stockList
