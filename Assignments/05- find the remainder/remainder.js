const remainder = (num1, num2) => {
    let counter;
//EXIT CONDITIONS

    //evaluate data type 
    if (!(typeof num1 === "number" && typeof num2 === "number")) {
        return console.log('NaN')
    }
    //same number condition
    if (num1 === num2) {
      return console.log("result: 1, remainder: 0")
    }

    //evaluate values 
    if (num1 === 0 || num2 === 0) {
        return console.log("Error, cannot divide by zero.")
    } 

    //val1 will be divded by val2, so it must be less 
    let val1 = num1 < num2 ? num2 : num1;
    let val2 = num2 > num1 ? num1 : num2;
    
    
   //logic
 counter = 0;
  do { 
    counter++;
    val1 -= val2;
    console.log(val1,val2)
  } while (val1 >= val2) //
  
  return console.log(`result: ${counter}, remainder: ${val1} `)
}

