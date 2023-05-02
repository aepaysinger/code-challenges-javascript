const scramble = (str1, str2) => {
  let str1_character_count = {}
  let str2_character_count = {}
  for (character of str1) {
    if (character in str1_character_count) {
      str1_character_count[character] += 1
    } else {
      str1_character_count[character] = 1
    }
  }
  for (character of str2) {
    if (character in str2_character_count) {
      str2_character_count[character] += 1
    } else {
      str2_character_count[character] = 1
    }
  }
  for (key in str2_character_count) {
    if (str1_character_count[key] === undefined) {
      return false
    } else if (str1_character_count[key] < str2_character_count[key]) {
      return false
    }
  }

  return true
}

module.exports = scramble
