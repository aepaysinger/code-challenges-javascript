const arrange = require("../challenges/re_arrange.js")

test("[1, 2, 3, 4, 5, 6]", () => {
  expect(arrange([1, 2, 3, 4, 5, 6])).toStrictEqual([1, 6, 5, 2, 3, 4])
})

test("[1, 2]", () => {
  expect(arrange([1, 2])).toStrictEqual([1, 2])
})

test("[5, 4, 3, 2, 1]", () => {
  expect(arrange([5, 4, 3, 2, 1])).toStrictEqual([5, 1, 2, 4, 3])
})
