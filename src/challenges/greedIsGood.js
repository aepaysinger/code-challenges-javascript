const score = (dice) => {
  let score = 0
  let rolls = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  }
  dice.forEach((roll) => {
    rolls[roll] += 1
  })
  for (const number in rolls) {
    if (number == 1 && rolls[number] >= 3) {
      score += 1000
      rolls[number] -= 3
    } else if (rolls[number] >= 3 && number == 5) {
      score += 500
      rolls[number] -= 3
    } else if (rolls[number] >= 3) {
      score += number * 100
    }
  }
  if (rolls[1] >= 1) {
    score += rolls[1] * 100
  }
  if (rolls[5] >= 1) {
    score += rolls[5] * 50
  }
  return score
}

module.exports = score
