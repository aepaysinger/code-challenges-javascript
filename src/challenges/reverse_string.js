function reverseString(str) {
  var strReverse = str.split("")
  var strReverse = strReverse.reverse()
  var strReverse = strReverse.join("")

  return strReverse
}

module.exports = reverseString
