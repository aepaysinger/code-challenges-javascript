const updateRecords = require("../challenges/recordsCollection.js")
const recordCollection = require("../challenges/recordsCollection.js")

test("adding ABBA", () => {
  expect(updateRecords(recordCollection, 5439, "artist", "ABBA")).toBe({
    1245: { artist: "Robert Palmer", tracks: [] },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    5439: { albumTitle: "ABBA Gold", artist: "ABBA" },
  })
})
