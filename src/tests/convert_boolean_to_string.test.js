const booleanToString = require("../challenges/convert_boolean_to_string.js");

test("True should return true", () => {
  expect(booleanToString(true)).toBe("true");
});

test("False should return false", () => {
  expect(booleanToString(false)).toBe("false");
});
