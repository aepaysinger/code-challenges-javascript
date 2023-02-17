const parse = require("../challenges/deadfish_swim.js")

test("iiisdoso should return [8, 64]", () => {
  expect(parse("iiisdoso")).toStrictEqual([8, 64])
})

test("aoioioi should return [0, 1, 2]", () => {
  expect(parse("aoioioi")).toStrictEqual([0, 1, 2])
})
