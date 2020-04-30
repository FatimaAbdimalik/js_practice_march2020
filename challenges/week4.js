function findSmallNums(nums) {
  let arr1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      arr1.push(nums[i]);
    }
  }
  return arr1;
}

function findNamesBeginningWith(names, char) {
  let arr1 = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      arr1.push(names[i]);
    }
  }
  return arr1;
}

function findVerbs(words) {
  return words.filter((word) => word.includes("to "));
  // Your code here
}

function getIntegers(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

function getCities(users) {
  return users.map((user) => user.data.city.displayName);
}

function getSquareRoots(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return arr;
}

function findSentencesContaining(sentences, str) {
  let arr1 = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      arr1.push(sentences[i]);
    }
  }
  return arr1;
}

function getLongestSides(triangles) {
  let arr = [];
  let arr1 = Math.max(...triangles[0]);
  let arr2 = Math.max(...triangles[1]);
  let arr3 = Math.max(...triangles[2]);
  let arr4 = Math.max(...triangles[3]);
  let arr5 = Math.max(...triangles[4]);
  arr.push(arr1, arr2, arr3, arr4, arr5);
  console.log(arr);
  return arr;
  // let arr = [];
  // for (let i = 0; i < triangles.length; i++) {
  //   arr.push(Math.max.apply(null, triangles[i]));
  // }
  // console.log(arr);
  // return arr;
  // return triangles.map((arr) => Math.max(...arr));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
