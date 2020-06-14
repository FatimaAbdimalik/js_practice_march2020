const { sumDigits, createRange } = require("../challenges/week10");

describe("sumDigits", () => {
  test("it return the sum of all numbers", () => {
    expect(sumDigits(987)).toBe(24);
  });
  test("it return the sum of all numbers", () => {
    expect(sumDigits(123)).toBe(6);
  });
  test("it return the sum of all numbers", () => {
    expect(sumDigits(4444)).toBe(16);
  });
  test("it return the sum of all numbers", () => {
    expect(sumDigits(234)).toBe(9);
  });
});
describe("createRange", () => {
  test("creates a range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });
  test("creates a range of numbers as an array", () => {
    expect(createRange(5, 35, 5)).toEqual([5, 10, 15, 20, 25, 30, 35]);
  });
  test("creates a range of numbers as an array", () => {
    expect(createRange(3, 42, 13)).toEqual([3, 16, 29, 42]);
  });
  test("creates a range of numbers as an array", () => {
    expect(createRange(4, 64, 12)).toEqual([4, 16, 28, 40, 52, 64]);
  });
  test("step is missing, assume step = 1", () => {
    expect(createRange(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
