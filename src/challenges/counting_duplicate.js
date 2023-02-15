function duplicateCount(text) {
  text = text.toLowerCase()
  let counts = text.split("").reduce((charCounter, char) => {
    if (char in charCounter) {
      charCounter[char] += 1
    } else {
      charCounter[char] = 1
    }
    return charCounter
  }, {})

  let totalCount = Object.keys(counts).reduce((total, key) => {
    if (counts[key] >= 2) {
      total += 1
    }
    return total
  }, 0)

  return totalCount
}

module.exports = duplicateCount
