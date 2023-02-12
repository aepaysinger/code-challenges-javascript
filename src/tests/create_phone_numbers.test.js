const createPhoneNumber = require("../challenges/create_phone_number.js")

test("1234567890 should be (123) 456-7890", () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  )
})
