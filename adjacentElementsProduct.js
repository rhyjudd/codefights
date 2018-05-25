function adjacentElementsProduct(inputArray) {
    let finalArray = [];
    console.log(inputArray);
    for( let i =0; i <  inputArray.length-1; i ++){
      finalArray.push(inputArray[i] * inputArray[i+1]);
    }
    console.log(finalArray);
    finalArray.sort(function(a,b){
        return b - a;
    });
    console.log(finalArray);
    console.log(finalArray[0]);
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]);