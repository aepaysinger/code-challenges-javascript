function grow(x) {
  result = 1

  x.forEach((num) => (result *= num))
  return result
}
module.exports = grow
