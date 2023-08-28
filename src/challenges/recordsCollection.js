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

module.exports = { recordCollection, updateRecords }
