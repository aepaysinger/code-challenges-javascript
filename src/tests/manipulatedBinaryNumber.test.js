const eliminateUnsetBits = require("../challenges/manipulatedBinaryNumbers")

test("test elminateUnsetBits 11010101010101", () => {
  expect(eliminateUnsetBits("11010101010101")).toBe(255)
})

test("test elminateUnsetBits 111", () => {
  expect(eliminateUnsetBits("111")).toBe(7)
})

test("test elminateUnsetBits 000", () => {
  expect(eliminateUnsetBits("000")).toBe(0)
})
