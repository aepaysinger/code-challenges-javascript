function sumCubes(n) {
  var totalSum = 0
  for (let i = 1; i <= n; i++) {
    totalSum += Math.pow(i, 3)
  }
  return totalSum
}

module.exports = sumCubes
