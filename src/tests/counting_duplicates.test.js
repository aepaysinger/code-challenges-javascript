const duplicateCount = require("../challenges/counting_duplicate.js")

test("butter should return 1", () => {
  expect(duplicateCount("butter")).toBe(1)
})

test("Swimmers to return 2", () => {
  expect(duplicateCount("Swimmers")).toBe(2)
})
