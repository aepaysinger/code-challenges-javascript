const score = require("../challenges/greedIsGood")

test("[5, 1, 3, 4, 1]", () => {
  expect(score([5, 1, 3, 4, 1])).toBe(250)
})

test("[1, 1, 1, 3, 1]", () => {
  expect(score([1, 1, 1, 3, 1])).toBe(1100)
})

test("[2, 4, 4, 5, 4]", () => {
  expect(score([2, 4, 4, 5, 4])).toBe(450)
})
