const countDown = require("../challenges/countDown.js")

test("5", () => {
  expect(countDown(5)).toStrictEqual([5, 4, 3, 2, 1])
})
