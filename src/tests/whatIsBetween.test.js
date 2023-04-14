const between = require("../challenges/whatIsBetween.js")

test("between 1 and 4", () => {
  expect(between(1, 4)).toStrictEqual([1, 2, 3, 4])
})

test("between -2 and 2", () => {
  expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2])
})
