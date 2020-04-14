function getFillings(sandwich) {
  // if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  // if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  // if (people === undefined) throw new Error("people is required");
  // Your code here!
  let busNumber = people / 40;
  return Math.ceil(busNumber);
}
//   if (people <= 40) {
//     return 1;
//   } else if (people <= 80) {
//     return 2;
//   } else if (people >= 80 && people <= 120) {
//     return 3;
//   } else if (people === 43728) {
//     return 1094;
//   }
// }

function countSheep(arr) {
  // if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      count++;
    }
  }
  return count;
}

function hasMPostCode(person) {
  // if (person === undefined) throw new Error("person is required");
  // Your code here!
  let newString = person.address.city;
  let anothterNewString = person.address.postCode;
  for (let key in person) {
    if (anothterNewString.startsWith("M") && newString === "Manchester") {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
