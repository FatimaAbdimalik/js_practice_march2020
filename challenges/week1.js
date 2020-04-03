function capitalize(word) {
  // if (word === undefined) throw new Error("word is required");
  let capLetter = word.charAt(0).toUpperCase();
  let remainLetter = word.slice(1);
  return capLetter + remainLetter;
}

function generateInitials(firstName, lastName) {
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  // if (originalPrice === undefined) throw new Error("originalPrice is requied");
  // if (vatRate === undefined) throw new Error("vatRate is required");
  return (
    Math.floor(originalPrice * (vatRate / 100) * 100) / 100 + originalPrice
  );
}

function getSalePrice(originalPrice, reduction) {
  return originalPrice - ((originalPrice * reduction) / 100).toFixed(2);
}

function getMiddleCharacter(str) {
  let position1 = str.length;
  let position2 = position1 / 2;
  let position3 = position1 - 1;
  let position4 = position3 / 2;

  if (str.length % 2 === 0) {
    return str.charAt(position2 - 1) + str.charAt(position2);
  } else {
    return str.charAt(position4);
  }
}

function reverseWord(word) {
  return word
    .split("")
    .reverse()
    .join("");
}

function reverseAllWords(words) {
  return words.map(words =>
    words
      .split("")
      .reverse()
      .join("")
  );
}

function countLinuxUsers(users) {
  let count = 0;
  users.forEach(user => {
    if (user.type === "Linux") {
      count++;
    }
  });
  return count;
}

function getMeanScore(scores) {
  let count = 0;

  scores.forEach(scores => {
    count += scores;
  });
  let meanCount = count / scores.length;
  return parseFloat(meanCount.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 3 != 0 && n % 5 != 0) {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
