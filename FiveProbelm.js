// problem - 1;
function radianToDegree(radians) {
  if (typeof radians !== "number") {
    return "input a number";
  }
  let result = (radians * (180 / Math.PI)).toFixed(2);
  return result;
}
// problem - 2;
function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "Enter a String";
  }
  const result = fileName.endsWith(".js");
  return result;
}
// problem - 3;
function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
  const diselPrice = 114;
  const petrolPrice = 130;
  const octelPrice = 135;
  const total =
    diselQuantity * diselPrice +
    octenQuantity * octelPrice +
    petrolQuantity * petrolPrice;
  return total;
}
// problem - 4;
function publicBusFare(member) {
  if (typeof member !== "number") {
    return "Input a Number";
  }
  const bus = member % 50;
  const microbus = bus % 11;
  const publicbus = microbus * 250;
  return publicbus;
}
// problem - 5;
function isBestFriend(friend1, friend2) {
  const final =
    friend1.name == friend2.friend && friend1.friend == friend2.name;
  return final;
}
