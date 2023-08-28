const { contacts, lookUpProfile } = require("../challenges/profileLookup.js")

test("in contacts", () => {
  expect(lookUpProfile("Kristian", "lastName")).toBe("Vos")
})

test("not in contacts", () => {
  expect(lookUpProfile("Bob", "number")).toBe("No such contact")
})

test("property does not exist", () => {
  expect(lookUpProfile("Harry", "friends")).toBe("No such property")
})
