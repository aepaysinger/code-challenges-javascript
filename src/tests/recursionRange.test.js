const recursionRange = require("../challenges/recursionRange.js")

test("range 1,5", () => {
  expect(recursionRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5])
})

test("range 3,3", () => {
  expect(recursionRange(3, 3)).toStrictEqual([3])
})
