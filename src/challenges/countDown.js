const countDown = (n) => {
  // Base case
  if (n < 1) {
    return []
  } else {
    const countArray = countDown(n - 1)
    countArray.push(3 - n + 1)
    return countArray
  }
}
console.log(countDown(3))
// module.exports = countDown
// countDown(1)
// countDown(2)
// countDown(3)[(3, 2, 1)]

// 3
// 2
// 1
