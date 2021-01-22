//  https://github.com/OmarFaruq947/assignment-3-







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
var value = kilometerToMeter(1); //input value
console.log(value);










//  2)  Budget calculate programme

function budgetCalculator(watch,phone,laptop) {  // function
  const watchProduct=watch*50; 
  const phoneProduct=phone*100;
  const laptopProduct=laptop*500;
  const totalCost = (watchProduct+phoneProduct+laptopProduct); //sum value of total cost
  return totalCost;
}
const allProduct=budgetCalculator(4, 4, 4);  // function call
console.log(allProduct);











// 3) Hotel cost management system

function hotelCost(day) {
  var cost=0;
  if (day<=10) {       // for first 10 days
      var cost=day*100;
  }
  else if(day<=20){          // for 11-20 days
      var firstTenDay=10*100;
      var remaining=day-10;
      var twentyDay=remaining*80;
      cost=firstTenDay+twentyDay;
  }
  else{                         // for 21- 21up days
      var firstTenDay=10*100;
      var twentyDay=10*80;
      var remaining=day-20;
      var twentyUpDay=remaining*50;
      cost=(firstTenDay+twentyDay+twentyUpDay);
  }
  return cost;
}
var totalCost=hotelCost(200);
console.log(totalCost);










// 4) Mega Friend
function megaFriend(arr) {
    var lgth = 0;
  var longest;  
  for (var i = 0; i<arr.length; i++) {  // condition 
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];  
    }
  }
return longest;
}

var arr = ['faruq','rofiq','jobbar','omar','omarFaruq','motin','hatem'];

var maximumCharacterOfArrayElements= megaFriend(arr);
console.log(maximumCharacterOfArrayElements);
