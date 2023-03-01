const high = require("../challenges/highestScoringWord.js")

test("man i need a taxi up to ubud", () => {
  expect(high("man i need a taxi up to ubud")).toBe("taxi")
})

test("what time are we climbing up the volcano", () => {
  expect(high("what time are we climbing up the volcano")).toBe("volcano")
})

test("thanks for all your help", () => {
  expect(high("thanks for all your help")).toBe("your")
})
