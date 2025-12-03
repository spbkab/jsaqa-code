// app.js
function exampleFunction(condition) {
  if (condition) {
    return 'Condition is true';
  } else {
    return 'Condition is false';
  }
}

function anotherFunction() {
  const result = 2 + 2;
  return result;
}

// test/unit/app.test.js
test('exampleFunction returns correct value for true condition', () => {
  expect(exampleFunction(true)).toBe('Condition is true');
});

test('exampleFunction returns correct value for false condition', () => {
  expect(exampleFunction(false)).toBe('Condition is false');
});

test('anotherFunction returns correct result', () => {
  expect(anotherFunction()).toBe(4);
});