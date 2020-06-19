const {
  sumDigits,
  createRange,
  hexToRGB,
  findWinner,
} = require("../challenges/week10");

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

describe("hexToRGB", () => {
  test("transform the hex code into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
  });
  test("transform the hex code into an RGB code", () => {
    expect(hexToRGB("#00FFBF")).toEqual("rgb(0,255,191)");
  });
  test("transform the hex code into an RGB code", () => {
    expect(hexToRGB("#FFFF00")).toEqual("rgb(255,255,0)");
  });
  test("transform the hex code into an RGB code", () => {
    expect(hexToRGB("#BF00FF")).toEqual("rgb(191,0,255)");
  });
  test("transform the hex code into an RGB code", () => {
    expect(hexToRGB("#FA8072")).toEqual("rgb(250,128,114)");
  });
});

describe("findWinner", () => {
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toEqual("X");
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", "0", "0"],
        [null, "0", "0"],
      ])
    ).toEqual("0");
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        [null, null, "0"],
        ["X", null, "0"],
      ])
    ).toEqual(null);
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        [null, "X", "0"],
        ["X", null, "X"],
      ])
    ).toEqual("X");
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        [null, "0", "0"],
        ["X", null, "0"],
      ])
    ).toEqual(null);
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["0", "0", "0"],
        ["X", null, "0"],
      ])
    ).toEqual("0");
  });
});
