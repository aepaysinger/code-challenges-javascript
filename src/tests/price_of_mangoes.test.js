const mango = require("../challenges/price_of_magoes.js")

test("9 mangoes for 5 should be $30", () => {
  expect(mango(9, 5)).toBe(30)
})

test("6 mangoes for 3 should be $30", () => {
  expect(mango(6, 3)).toBe(12)
})
