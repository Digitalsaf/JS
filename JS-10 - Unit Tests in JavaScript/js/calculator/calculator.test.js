const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('divides 10 % 2', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divides 4 % 4', () => {
  expect(calculator.divide(4, 4)).toBe(1);
});


test('multiplies 6 * 6', () => {
  expect(calculator.multiply(6, 6)).toBe(36);
});

test('multiplies 9 * 3', () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});