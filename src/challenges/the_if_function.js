function _if(bool, func1, func2) {
  if (bool) {
    return func1()
  } else {
    return func2()
  }
}

function func1() {
  return "function 1 was called"
}

function func2() {
  return "function 2 was called"
}

;(module.exports = _if), func1, func2
