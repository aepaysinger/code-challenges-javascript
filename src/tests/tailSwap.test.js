const tailSwap = require("../challenges/tailSwap.js")

test("test tailSwap", () => {
  expect(tailSwap(["abc:123", "cde:456"])).toStrictEqual(["abc:456", "cde:123"])
})
