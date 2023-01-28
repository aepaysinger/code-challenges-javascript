const evenOrOdd = require("../challenges/the_if_function.js");

test("should call func1", () => {
  expect(_if(True, func1, func2)).toBe(func1());
});