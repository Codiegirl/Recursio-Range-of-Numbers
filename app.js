function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
    return [endNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum)
      return numbers
    }
  };