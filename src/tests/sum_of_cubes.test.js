const sumCubes = require("../challenges/sum_of_cubes.js")

test("sub numbers from 1-3 cubed = 36", () => {
  expect(sumCubes(3)).toBe(36)
})
