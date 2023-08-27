const countDown = (n) => {
  if (n < 1) {
    return []
  } else {
    const countArray = countDown(n - 1)
    countArray.unshift(n)
    return countArray
  }
}

module.exports = countDown
