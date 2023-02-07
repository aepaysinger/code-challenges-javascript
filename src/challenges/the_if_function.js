function _if(bool, func1, func2) {
  if (bool) {
    func1()
  } else {
    func2()
  }
}

function func1() {
  console.log("function 1 was called")
}

function func2() {
  console.log("function 2 was called")
}

module.exports = _if, func1, func2;
