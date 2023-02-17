const parse = (data) => {
  let value = 0
  let valuesArray = []
  const changeValue = (item) => {
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

  data.split("").forEach(changeValue)

  return valuesArray
}

module.exports = parse
