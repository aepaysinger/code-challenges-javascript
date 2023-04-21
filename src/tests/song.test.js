const Song = require("../challenges/song.js")

test("Song ABC by BigBird", () => {
  const song = new Song("ABC", "BigBird")
  expect(song.howMany(["bob", "susan", "sam"])).toBe(3)
})

test("Song ABC by BigBird, extra listners", () => {
  const song = new Song("ABC", "BigBird")
  song.howMany(["linda", "SUSAN", "chris"])
  expect(song.howMany(["bob", "susan", "sam"])).toBe(2)
})
