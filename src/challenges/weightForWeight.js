const orderWeight = (strng) => {
  adjustedWeight = {}
  let finalWeightOrder = []
  result = ""
  strng.split(" ").forEach((weight) => {
    adjustedWeight[weight] = weight.split("")
  })
  for (weight in adjustedWeight) {
    adjustedWeight[weight] = adjustedWeight[weight].map(Number)
  }
  for (weight in adjustedWeight) {
    let sum = 0
    for (let i = 0; i < adjustedWeight[weight].length; i++) {
      sum += adjustedWeight[weight][i]
      if (i === adjustedWeight[weight].length - 1) {
        adjustedWeight[weight] = sum
        finalWeightOrder.push([adjustedWeight[weight], weight])
      }
    }
  }
  finalWeightOrder.forEach((weight) => {
    weight[0] = weight[0].toString()
  })
  console.log(finalWeightOrder)
  //   let weightSort = finalWeightOrder.sort()
  let weightSort = finalWeightOrder.sort(function (a, b) {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  console.log(weightSort)
  weightSort.forEach((weight) => {
    result += weight[1] + " "
  })

  return result.slice(0, -1)
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"))

var sum = 0

// Running the for loop
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
