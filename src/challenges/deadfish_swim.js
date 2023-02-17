const parse = (data) => {
  let value = 0
  let valuesArray = []
  for (item of data) {
    if (item === "i") {
      value += 1
    } else if (item === "d") {
      value -= 1
    } else if (item === "s") {
      value *= value
    } else if (item === "o") {
      valuesArray.push(value)
    }
  }
  return valuesArray
}

module.exports = parse
