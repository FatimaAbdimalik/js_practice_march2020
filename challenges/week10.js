/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = (n) => {
  // if (n === undefined) throw new Error("n is required");
  let arr = n
    .toString()
    .split("")
    .map((p) => parseInt(p))
    .reduce((a, b) => a + b);
  return arr;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  // if (start === undefined) throw new Error("start is required");
  // if (end === undefined) throw new Error("end is required");
  let arr = [];
  while (start <= end) {
    arr.push(start);
    if (!step) {
      start++;
    } else {
      start += step;
    }
  }
  // console.log(arr);
  return arr;
};
/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr) => {
  // if (hexStr === undefined) throw new Error("hexStr is required");
  let rgb = hexStr
    .slice(1)
    .match(/.{1,2}/g)
    .map((c) => parseInt(c, 16));
  return `rgb(${rgb})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = (board) => {
  // if (board === undefined) throw new Error("board is required");

  // player wons if either diagonal , vertically or horizontally
  let won;
  let won1;
  let won2;
  let won3;
  let won4;
  let won5;
  let won6;
  let won7;
  // Test vertical won
  let V1 = board.map((p) => p[0]);
  let V2 = board.map((p) => p[1]);
  let V3 = board.map((p) => p[2]);
  if (V1[0] === V1[1] && V1[0] === V1[2] && V1[0] === "X") {
    won = "X";
  } else if (V1[0] === V1[1] && V1[0] === V1[2] && V1[0] === "0") {
    won = "0";
  } else {
    won = null;
  }
  if (V2[0] === V2[1] && V2[0] === V2[2] && V2[0] === "0") {
    won1 = "0";
  } else if (V2[0] === V2[1] && V2[0] === V2[2] && V2[0] === "X") {
    won1 = "X";
  } else {
    won1 = null;
  }

  if (V3[0] === V3[1] && V3[0] === V3[2] && V3[0] === "X") {
    won2 = "X";
  } else if (V3[0] === V3[1] && V3[0] === V3[2] && V3[0] === "0") {
    won2 = "0";
  } else {
    won2 = null;
  }

  // HORIZONTAL WIN
  let H1 = board[0];
  if (H1[0] === H1[1] && H1[0] === H1[2] && H1[0] === "X") {
    won3 = "X";
  } else if (H1[0] === H1[1] && H1[0] === H1[2] && H1[0] === "0") {
    won3 = "0";
  } else {
    won3 = null;
  }
  let H2 = board[1];
  if (H2[0] === H2[1] && H2[0] === H2[2] && H2[0] === "X") {
    won4 = "X";
  } else if (H2[0] === H2[1] && H2[0] === H2[2] && H2[0] === "0") {
    won4 = "0";
  } else {
    won4 = null;
  }
  let H3 = board[2];
  if (H3[0] === H3[1] && H3[0] === H3[2] && H3[0] === "X") {
    won5 = "X";
  } else if (H3[0] === H3[1] && H3[0] === H3[2] && H3[0] === "0") {
    won5 = "0";
  } else {
    won5 = null;
  }

  // DIAGONAL WIN
  // first digonal line
  let D1 = board[0][0]; // first corner
  let D2 = board[1][1]; // middle
  let D3 = board[2][2]; // last corner
  if (D1 === D2 && D1 === D3 && D1 === "0") {
    won6 = "0";
  } else if (D1 === D2 && D1 === D3 && D1 === "X") {
    won6 = "X";
  } else {
    won6 = null;
  }

  // seocnd digonal line
  let D4 = board[2][0];
  let D5 = board[0][2];
  if (D4 === D2 && D4 === D5 && D4 === "0") {
    won7 = "0";
  } else if (D4 === D2 && D4 === D5 && D4 === "X") {
    won7 = "X";
  } else {
    won7 = null;
  }

  // VALIDATE either H OR V OR D

  if (won != null) {
    return won;
  } else if (won1 != null) {
    return won1;
  } else if (won2 != null) {
    return won2;
  } else if (won3 != null) {
    return won3;
  } else if (won4 != null) {
    return won4;
  } else if (won5 != null) {
    return won5;
  } else if (won6 != null) {
    return won6;
  } else if (won7 != null) {
    return won7;
  } else {
    return null;
  }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
};
