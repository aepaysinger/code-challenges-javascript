const recursionRange = (startNum, endNum) => {
  if (startNum > endNum) {
    return []
  } else {
    const addArray = recursionRange(startNum, endNum - 1)
    addArray.push(endNum)
    return addArray
  }
}
module.exports = recursionRange
