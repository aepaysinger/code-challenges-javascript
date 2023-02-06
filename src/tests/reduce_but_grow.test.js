const grow = require("../challenges/reduce_but_grow.js");

test("1 * 2 * 3 * 4 = 24", () => {
  expect(grow([1, 2, 3, 4])).toBe(24);
});
