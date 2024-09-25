let value = "zero"
function checkNumberType(number){
    if(number>0){
        console.log("The entered number is"+ typeof value + " is a Positive number");        
    }
    else if (number<0){
        console.log("The entered number is"+ typeof value + " is a Negative number");
    }
    else{
        console.log("The entered value is unsupported or Zero");
    }

}

checkNumberType(value)