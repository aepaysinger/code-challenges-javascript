function duplicateCount(text) {
  text = text.toLowerCase()
  let charCounter = {}
  let total = 0
  for (const x of text) {
    if (x in charCounter) {
      charCounter[x] += 1
    } else {
      charCounter[x] = 1
    }
  }
  for (const x in charCounter) {
    if (charCounter[x] >= 2) {
      total += 1
    }
  }
  return total
}

module.exports = duplicateCount
