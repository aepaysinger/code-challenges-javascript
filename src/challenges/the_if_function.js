function _if(bool, func1, func2) {
    if (bool == True) {
        return func1()
    } else {
        return func2()
    }
  }