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
function countdown(myArray, n){
    if (n <= 0){
      return [n]
    } else {
      myArray.push(n)
      countdown(myArray, n - 1)
      
      
    }
    
  }