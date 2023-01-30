function mango(quantity, price) {
  dealPrice = price * 2
  totalPrice = Math.floor(quantity / 3) * dealPrice
  totalPrice += (quantity % 3) * price
  return totalPrice
}
module.exports = mango
