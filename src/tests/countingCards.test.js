// let count = require("../challenges/countingCards.js")
const cc = require("../challenges/countingCards.js")
const cardGame = require("../challenges/countingCards.js")

// const cases = [
//   [2, "1 Bet"],
//   [3, "2 Bet"],
//   [4, "3 Bet"],
//   [5, "4 Bet"],
//   [6, "5 Bet"],
// ]

// describe(" cc2 cc3 cc4 cc5 cc6", () => {
//   test.each(cases)(
//     "given %p as the card, returns %p",
//     (firstArg, expectedResult) => {
//       const result = cc(firstArg)
//       expectedResult(result).toEqual(expectedResult)
//     }
//   )
// })
test("cc2 cc3 cc4 cc5 cc6", () => {
  expect((cc(2), cc(3), cc(4))).toBe("3 Bet")
})

test("cc5", () => {
  expect(cc(5)).toBe("4 Bet")
})
