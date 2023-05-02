const scramble = require("../challenges/scramblies.js")

test("scramble A", () => {
  expect(scramble("katas", "steak")).toBe(false)
})

test("scramble B", () => {
  expect(scramble("cedewaraaossoqqyt", "codewars")).toBe(true)
})
