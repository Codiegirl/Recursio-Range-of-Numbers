function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
    return [endNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum)
      return numbers
    }
  };




  //Only change code below this line
  function countdown(n){
    if (n < 1){
      return []
    } else {
      
      var newArray = countdown(n - 1)
      newArray.unshift(n)
      return newArray
      
    }
    
  }
  