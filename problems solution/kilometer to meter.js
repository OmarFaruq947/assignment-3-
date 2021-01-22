// 1) Kilometer to meter conversion using the function

function kilometerToMeter(kilometer) {
    if (kilometer>0) {
        var meter=kilometer*1000;
        console.log("your value is right."); //massage 
    }
    else if(kilometer==0){
        console.log("your value is zero. this is not correct value, please enter your correct value.")  // error massage
    }
    else{
        console.log("your value is Negative. this is not correct value, please enter your correct value.");  // error massage
    }
    return meter;
}
var value = kilometerToMeter(1);
console.log(value);
