const reverseString = require("../challenges/reverse_string.js")

test("reverse Hello", () => {
  expect(reverseString("Hello")).toBe("olleH")
})
