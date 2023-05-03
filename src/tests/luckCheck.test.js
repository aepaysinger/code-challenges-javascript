const luckCheck = require("../challenges/luckCheck.js")

test("even correct ticket", () => {
  expect(luckCheck("683179")).toBe(true)
})

test("odd correct ticket", () => {
  expect(luckCheck("6839179")).toBe(true)
})

test("even wrong ticket", () => {
  expect(luckCheck("693179")).toBe(false)
})

test("odd wrong ticket", () => {
  expect(luckCheck("7659678")).toBe(false)
})

test("space in ticket", () => {
  expect(() => {
    luckCheck("111003 ")
  }).toThrow(new Error("incorrect ticket"))
})

test("none number in ticket", () => {
  expect(() => {
    luckCheck("1a1003 ")
  }).toThrow(new Error("incorrect ticket"))
})
