const _if = require('../challenges/the_if_function.js');

test("true should call func1", () => {
  expect(_if(true, func1, func2)).toBe(func1());
}); 