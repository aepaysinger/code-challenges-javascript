const eliminateUnsetBits = (number) => {
  let justOnes = ""
  for (let i = 0; i <= number.length; i++) {
    if (number[i] === "1") {
      justOnes += number[i]
    }
  }
  if (justOnes.length === 0) {
    return 0
  }
  return parseInt(justOnes, 2)
}

module.exports = eliminateUnsetBits
