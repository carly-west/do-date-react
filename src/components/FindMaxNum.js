export default function FindMaxNum(arrayToFindMax, substringAmount) {
  const numberList = [];

  if (arrayToFindMax.length === 0) {
    return 0;
  } else {
    // Put all of the numbers into list
    for (const number in arrayToFindMax) {
      numberList.push(parseInt(arrayToFindMax[number].substring(substringAmount)));
    }

    var maxNum = Math.max.apply(null, numberList);

    return maxNum;
  }
}
