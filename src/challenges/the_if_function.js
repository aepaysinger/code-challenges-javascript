function _if(bool, func1, func2) {
    if (bool) {
        func1()
    } else {
        func2()
    }
  }

module.exports = _if; 