let count = 0

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1
      break
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1
      break
  }
  if (count > 0) {
    return count.toString() + " Bet"
  } else {
    return count.toString() + " Hold"
  }
}

const cardGame = (card) => {
  let up = [2, 3, 4, 5, 6]
  let down = [10, "J", "Q", "K", "A"]
  if (card in up) {
    count += 1
  } else if (card in down) {
    count -= 1
  }
  if (count > 0) {
    return count.toString() + " Bet"
  } else {
    return count.toString() + " Hold"
  }
}
module.exports = { cc, cardGame, count }
