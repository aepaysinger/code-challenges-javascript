const luckCheck = (ticket) => {
  let leftSide = 0
  let rightSide = 0
  let halfWay = Math.floor(ticket.length / 2)
  for (let i in ticket) {
    if (isNaN(ticket[i]) || ticket[i] === " ") {
      throw new Error("incorrect ticket")
    }
    if (ticket.length % 2 === 0) {
      if (i <= halfWay - 1) {
        leftSide += parseInt(ticket[i])
      } else {
        rightSide += parseInt(ticket[i])
      }
    } else {
      if (i < halfWay) {
        leftSide += parseInt(ticket[i])
      } else if (i > halfWay) {
        rightSide += parseInt(ticket[i])
      }
    }
  }

  return leftSide === rightSide
}

module.exports = luckCheck
