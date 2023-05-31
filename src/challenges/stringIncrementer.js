const incrementString = (strng) => {
  if (isNaN(strng.slice(-1))) {
    return strng + "1"
  }

  strng = strng.split("")
  strng = strng.reverse()

  let strngNumber = ""

  strng.forEach((character) => {
    if (!isNaN(character)) {
      strngNumber = character + strngNumber
    }
  })

  for (let i = 0; i < strngNumber.length; i++) {
    if (strngNumber[i] === "0") {
    } else {
      console.log(strngNumber.slice(i, -1))
      let notZero = parseInt(strngNumber.slice(i, -1))
      notZero += 1
      notZero = notZero.toString()
      strng = strng.reverse()
      strng = strng.join("")
      stop = strngNumber.length
      return strng.slice(0, -(stop - 1)) + strngNumber.slice(0, i) + notZero
    }
  }

  strngNumber = parseInt(strngNumber)
  strngNumber += 1

  strng = strng.reverse()
  strng = strng.join("")
  strngNumber = strngNumber.toString()
  stop = strngNumber.length

  return strng.slice(0, -(stop - 1)) + strngNumber
}
console.log(incrementString("foobar001"))
// step one: stringvariable.split("") = ['s', 't', 'r', 'i', 'n', 'g']
// step two: stringvariable.reverse() = ['g', 'n', 'i', 'r', 't', 's']
//step three: stringvariable.join("") = "gnirts"
