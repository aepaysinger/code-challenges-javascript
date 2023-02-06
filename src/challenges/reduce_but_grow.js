function grow(x){
    result = 1
  console.log(x)
    x.forEach(num => result *= num)
    return result
}
module.exports = grow