const {
  recordCollection,
  updateRecords,
} = require("../challenges/recordsCollection.js")

test("adding ABBA", () => {
  expect(updateRecords(recordCollection, 5439, "artist", "ABBA")).toStrictEqual(
    {
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
    }
  )
})

test("adding albumTitle Rip Tide", () => {
  expect(
    updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
  ).toStrictEqual({
    1245: { artist: "Robert Palmer", tracks: [], albumTitle: "Riptide" },
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

test("adding tracks take a chance on me", () => {
  expect(
    updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
  ).toStrictEqual({
    1245: { artist: "Robert Palmer", tracks: [], albumTitle: "Riptide" },
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
    5439: {
      albumTitle: "ABBA Gold",
      artist: "ABBA",
      tracks: ["Take a Chance on Me"],
    },
  })
})

test("removing item", () => {
  expect(updateRecords(recordCollection, 2548, "artist", "")).toStrictEqual({
    1245: { artist: "Robert Palmer", tracks: [], albumTitle: "Riptide" },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    2548: {
      albumTitle: "Slippery When Wet",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    5439: {
      albumTitle: "ABBA Gold",
      artist: "ABBA",
      tracks: ["Take a Chance on Me"],
    },
  })
})
