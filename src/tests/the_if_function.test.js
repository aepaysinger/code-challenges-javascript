const _if = require("../challenges/the_if_function.js")

function func1() {
  return "function 1 was called"
}

function func2() {
  return "function 2 was called"
}

test("true should call func1", () => {
  expect(_if(true, func1, func2)).toBe("function 1 was called")
})

test("false should call func2", () => {
  expect(_if(false, func1, func2)).toBe("function 2 was called")
})
