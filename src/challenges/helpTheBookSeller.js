const stockList = (listOfArt, listOfCat) => {
  let codeTotals = {}
  listOfArt.split(" ").forEach((element) => {
    console.log(element)
  })
}

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
)
//"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
