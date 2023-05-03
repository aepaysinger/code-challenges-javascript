function sumCubes(n) {
  var totalSum = 0
  for (let i = 1; i <= n; i++) {
    totalSum += Math.pow(i, 3)
  }
  return totalSum
}

module.exports = sumCubes

// return Array.from(Array(n).keys(), index => index + 1).reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 3), 0)
// test("1 * 2 * 3 * 4 = 24", () => {
//   expect(grow([1, 2, 3, 4])).toBe(24);
// });
