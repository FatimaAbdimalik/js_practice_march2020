const {
  sumMultiples,
  isValidDNA,
  isItPrime,
  areWeCovered,
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
    expect(() => {
      sumMultiples("foo");
    }).toThrow("An array is required");
  });
  test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test("works okay with decimal numbers", () => {
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
  });
  test("return 0 is there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("it returns true if str contains DNA characters", () => {
    const str = "CTGA";
    expect(isValidDNA(str)).toBe(true);
  });
});

describe("isItPrime", () => {
  test("returns false if n is not a prime", () => {
    expect(isItPrime(15)).toBe(false);
  });
  test("return true if number a prime", () => {
    expect(isItPrime(19)).toBe(true);
  });
});

describe("areWeCovered", () => {
  test("return false if there are no staff at all", () => {
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
  });

  test("return flase if staff schdulded to work < 3", () => {
    const staff = [
      { name: "Hanan", rota: ["Monday", "Tuesday"] },
      { name: "Sally", rota: ["Monday", "Tuesday"] },
      { name: "Suzan", rota: ["Monday", "Tuesday"] },
      { name: "Sara", rota: ["Monday", "Tuesday"] },
      { name: "Hafsa", rota: ["Monday", "Tuesday"] },
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("return true if staff schdulded to work > 3 and false if < 3", () => {
    const staff = [
      { name: "Amina", rota: ["Tuesday", "Wednesday", "Friday"] },
      { name: "Nawal", rota: ["Tuesday", "Thursday", "Friday"] },
      { name: "Noor", rota: ["Sunday", "Wednesday", "Friday"] },
      { name: "Sundus", rota: ["Saturday", "Monday", "Sunday"] },
      { name: "Ahmad", rota: ["Tuesday", "Sunday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
  });
});
