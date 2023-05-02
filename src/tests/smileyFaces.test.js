const countSmileys = require("../challenges/smileyFaces.js")

test(":D',':~)',';~D',':)", () => {
  expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4)
})

test("':})', ':(', ':D', ':O;, ':;'", () => {
  expect(countSmileys([":})", ":(", ":D", ":O", ":;"])).toBe(1)
})

test("':})', '8D', ':D', ':O;, ':;'", () => {
  expect(countSmileys([":})", "8D", ":D", ":O", ":;"])).toBe(1)
})
