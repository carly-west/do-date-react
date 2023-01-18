export default function FindMaxNum(arrayToFindMax, substringAmount) {
  const numberList = [];

  // Put all of the numbers into list
  for (const number in arrayToFindMax) {
    numberList.push(parseInt(arrayToFindMax[number].substring(substringAmount)));
  }

  var maxNum = Math.max.apply(null, numberList);

  return maxNum;
}
