const evenOrOdd = require("../challenges/even_or_odd.js");

test("checks to see if  18 is even", () => {
  expect(evenOrOdd(18)).toBe("Even");
});

test("checks to see if  11 is odd", () => {
  expect(evenOrOdd(11)).toBe("Odd");
});
