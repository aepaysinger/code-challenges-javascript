class Song {
  constructor(title, artist) {
    this.artist = artist
    this.title = title
    this.names = []
  }
  howMany(arrayOfNames) {
    let count = 0
    arrayOfNames.forEach((name) => {
      name = name.toUpperCase()
      if (!this.names.includes(name)) {
        this.names.push(name)
        count += 1
      }
    })
    return count
  }
}

module.exports = Song
