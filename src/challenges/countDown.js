const countDown = (n, holding = []) => {
  if (n < 1) {
    return holding
  } else {
    holding.push(n)
    countDown(n - 1, holding)
    return holding
  }
}

module.exports = countDown
