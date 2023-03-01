const stockList = require("../challenges/helpTheBookSeller.js")

test("['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600']", () => {
  expect(
    stockList(
      ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
      ["A", "B", "C", "D"]
    )
  ).toBe("(A : 0) - (B : 1290) - (C : 515) - (D : 600)")
})

test("[]", () => {
  expect(stockList([], ["A", "B", "C", "D"])).toBe("")
})
