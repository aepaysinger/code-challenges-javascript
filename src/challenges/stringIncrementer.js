const incrementString = (strng) => {
  let strngNumber = ""
  for (let character of strng) {
    if (!isNaN(character)) {
      strngNumber += character
    }
  }
  //   console.log(strngNumber)
  let numberToIncrease = parseInt(strngNumber)
  //   console.log(numberToIncrease)
  if (numberToIncrease === " ") {
    return strng + "1"
  } else {
    numberToIncrease += 1
    return strng + numberToIncrease.toString()
  }
}

console.log(incrementString("foo1"))
