const arrange = (s) => {
  let t = []
  let revS = s.slice().reverse()

  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    if (i % 2 == 0) {
      t.push(s[i])
      t.push(revS[i])
    } else {
      t.push(revS[i])
      t.push(s[i])
    }
  }
  return t.slice(0, s.length)
}

module.exports = arrange
