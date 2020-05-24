const findNextNumber = (nums, n) => {
  // if (nums === undefined) throw new Error("nums is required");
  // if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      // console.log(nums[i + 1]);
      return nums[i + 1];
    }
  }
  return null;

  // Your code here!
};

const count1sand0s = (str) => {
  // if (str === undefined) throw new Error("str is required");
  // Your code here!
  let str1 = str.split("");

  let count = str1.reduce((total, number) => {
    total[number] = (total[number] || 0) + 1;
    return total;
  }, {});
  console.log(count);
  return count;
};

const reverseNumber = (n) => {
  // if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(
    n
      .toString()
      .split("")
      .reverse()
      .map((p) => parseInt(p))
      .join("")
  );
};

const sumArrays = (arrs) => {
  // if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs.reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  // if (haystack === undefined) throw new Error("haystack is required");
  // if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  // let arr = Object.values(haystack);
  // let regex = /searchTerm/i;
  // console.log(regex.test(arr));
  // return regex.test(arr);
  for (let key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
