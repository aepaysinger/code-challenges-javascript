const stockList = (listOfArt, listOfCat) => {
  if ((listOfArt.length === 0) | (listOfCat.length === 0)) {
    return ""
  }
  let quantityOfBooks = {}
  let result = ""
  listOfArt.forEach((element) => {
    if (!(element.split(" ")[0][0] in quantityOfBooks)) {
      quantityOfBooks[element.split(" ")[0][0]] = parseInt(
        element.split(" ")[1]
      )
    } else {
      quantityOfBooks[element.split(" ")[0][0]] += parseInt(
        element.split(" ")[1]
      )
    }
  })
  listOfCat.forEach((character) => {
    if (character in quantityOfBooks) {
      result += `(${character} : ${quantityOfBooks[character]}) - `
    } else {
      result += `(${character} : 0) - `
    }
  })
  return result.slice(0, result.length - 3)
}

module.exports = stockList
