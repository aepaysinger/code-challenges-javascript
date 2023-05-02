const solution = (number) => {
  const arr = Array.from({ length: number - 1 }, (_, index) => index + 1)
  let totalOfMultiples = arr.reduce((total, num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      return total + num
    }
    return total
  }, 0)
  return totalOfMultiples
}

module.exports = solution
