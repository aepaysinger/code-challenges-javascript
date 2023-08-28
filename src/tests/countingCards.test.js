const myFunctions = require("../challenges/countingCards.js")

test("cc2 cc3 cc4 cc5 cc6", () => {
  myFunctions.cc(2)
  myFunctions.cc(3)
  myFunctions.cc(4)
  myFunctions.cc(5)
  expect(myFunctions.cc(6)).toBe("5 Bet")
})
