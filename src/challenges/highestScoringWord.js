const high = (x) => {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  const seperatedX = x.split(" ")
  const wordScores = {}
  seperatedX.forEach((word) => {
    wordScores[word] = 0
    word.split("").forEach((letter) => {
      wordScores[word] += alphabet[letter]
    })
  })
  let topScore = 0
  let topWord = null
  for (word in wordScores) {
    if (wordScores[word] > topScore) {
      topScore = wordScores[word]
      topWord = word
    }
  }

  return topWord
}

module.exports = high
