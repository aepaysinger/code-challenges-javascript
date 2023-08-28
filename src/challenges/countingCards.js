let ccCount = 0
let cardGameCount = 0

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      ccCount += 1
      break
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      ccCount -= 1
      break
  }
  if (ccCount > 0) {
    return ccCount.toString() + " Bet"
  } else {
    return ccCount.toString() + " Hold"
  }
}

const cardGame = (card) => {
  let up = [2, 3, 4, 5, 6]
  let down = [10, "J", "Q", "K", "A"]
  if (card in up) {
    cardGameCount += 1
  } else if (card in down) {
    cardGameCount -= 1
  }
  if (cardGameCount > 0) {
    return cardGameCount.toString() + " Bet"
  } else {
    return cardGameCount.toString() + " Hold"
  }
}
module.exports = { cc, cardGame, cardGameCount, ccCount }
