const countSmileys = (arr) => {
  let count = 0
  arr.forEach((smileyFace) => {
    if (smileyFace.length === 2) {
      if (
        (smileyFace.indexOf(":") === 0) | (smileyFace.indexOf(";") === 0) &&
        (smileyFace.indexOf(")") === 1) | (smileyFace.indexOf("D") === 1)
      ) {
        count += 1
      }
    } else if (smileyFace.length === 3) {
      if (
        (smileyFace.indexOf(":") === 0) | (smileyFace.indexOf(";") === 0) &&
        (smileyFace.indexOf("-") === 1) | (smileyFace.indexOf("~") === 1) &&
        (smileyFace.indexOf(")") === 2) | (smileyFace.indexOf("D") === 2)
      ) {
        count += 1
      }
    }
  })
  return count
}
module.exports = countSmileys
