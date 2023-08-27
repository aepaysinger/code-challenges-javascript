const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
}

module.exports = recordCollection

const updateRecords = (records, id, prop, value) => {
  if (value === "") {
    delete records[id][prop]
  } else if (prop === "artist") {
    records[id]["artist"] = value
  } else if (prop === "albumTitle") {
    records[id]["albumTitle"] = value
  } else if (prop === "tracks") {
    if (!(prop in records[id])) {
      records[id][prop] = []
    }
    records[id][prop].push(value)
  }

  return records
}

module.exports = updateRecords

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"))
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// updateRecords(recordCollection, 2548, "artist", "")
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// updateRecords(recordCollection, 2468, "tracks", "Free")
// updateRecords(recordCollection, 2548, "tracks", "")
// console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))
