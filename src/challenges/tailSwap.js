const tailSwap = (arr) => {
  let first = []
  let second = []

  arr.forEach((arrSet, i) => {
    let [a, b] = arrSet.split(":")
    if (i == 0) {
      first.push(a)
      second.push(b)
    } else {
      second.splice(0, 0, a)
      first.push(b)
    }
  })
  return [first[0] + ":" + first[1], second[0] + ":" + second[1]]
}

module.exports = tailSwap
