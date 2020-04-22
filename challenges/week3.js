function getSquares(nums) {
  return nums.map((num) => num * num);
}

function camelCaseWords(words) {
  let arr1 = words[0];
  for (let i = 1; i < words.length; i++) {
    arr1 += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return arr1;
}

function getTotalSubjects(people) {
  let arr = [];
  for (let i = 0; i < people.length; i++) {
    arr.push(people[i].subjects);
  }
  console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    item = arr[i].length;
    console.log(item);
    count += item;
  }
  console.log(count);
  return count;
}

function checkIngredients(menu, ingredient) {
  for (let i = 0; i < menu.length; i++) {
    // console.log(menu[i].ingredients)
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}
function duplicateNumbers(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  console.log(arr3.sort((a, b) => a - b));

  let arr4 = arr3.filter((item, index) => arr3.indexOf(item) === index);
  console.log(arr4);
  return arr4;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
