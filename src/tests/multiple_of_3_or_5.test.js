const solution = require("../challenges/multiples_of_3_or_5.js")

test("10 will add 3, 6, 9 to be 23", () => {
  expect(solution(10)).toBe(23)
})

test("15 will add 3, 6, 9, 10, 12 to be 35", () => {
  expect(solution(15)).toBe(45)
})
