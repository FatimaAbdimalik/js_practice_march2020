const findNextNumber = (nums, n) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = (str) => {
  let obj = {
    "1": 0,
    "0": 0,
  };
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "1") {
  //     obj["1"]++;
  //   } else {
  //     obj["0"]++;
  //   }
  // }
  // console.log(obj);
  // return obj;
  str.split("").forEach((num) => (num === "1" ? obj["1"]++ : obj["0"]++));
  return obj;
};

const reverseNumber = (n) => {
  return Number(n.toString().split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  return arrs.reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr.length >= 2) {
    let arr1 = arr.pop();
    let arr2 = arr.shift();
    let newArr = [arr1, ...arr, arr2];
    return newArr;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  // if (haystack === undefined) throw new Error("haystack is required");
  // if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  // let arr = Object.values(haystack);
  // let regex = /[searchTerm]/i;
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
  let str1 = str
    .replace(/[,!?]/gi, "")
    .split(" ")
    .map((p) => p.toLowerCase());
  let count = str1.reduce((total, noun) => {
    total[noun] = (total[noun] || 0) + 1;
    return total;
  }, {});
  return count;
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
