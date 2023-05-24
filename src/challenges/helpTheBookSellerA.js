const stockList = (listOfArt, listOfCat) => {
  let codeTotals = {}
  let finalResult = ""

  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return ""
  }

  listOfArt.forEach((book) => {
    book = book.split(" ")

    if (book[0][0] in codeTotals) {
      codeTotals[book[0][0]] += parseInt(book[1])
    } else {
      codeTotals[book[0][0]] = parseInt(book[1])
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
