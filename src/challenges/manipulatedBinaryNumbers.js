const eliminateUnsetBits = (number) => {
  let justOnes = number.split("0").join("")
  if (justOnes.length === 0) {
    return 0
  }

  return parseInt(justOnes, 2)
}

module.exports = eliminateUnsetBits
