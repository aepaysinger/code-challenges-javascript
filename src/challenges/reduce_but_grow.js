function grow(nums) {
  result = 1

  nums.forEach((num) => (result *= num))
  return result
}
module.exports = grow
