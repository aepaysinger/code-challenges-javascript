const { cc, cardGame } = require("../challenges/countingCards.js")

test("cc2 cc3 cc4 cc5 cc6", () => {
  cc(2)
  cc(3)
  cc(4)
  cc(5)
  expect(cc(6)).toBe("5 Bet")
})

test("cardGame K, J, 5", () => {
  cardGame("K")
  cardGame("J")
  expect(cardGame(5)).toBe("4 Bet")
})
