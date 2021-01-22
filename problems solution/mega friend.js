// 4) Mega Friend


function megaFriend(myArray) {
    var maxLen = 0;
for (i=0; i<myArray.length; i++) {
  if (myArray[i].length>maxLen) {
    maxLen = myArray[i];
  }
}
return maxLen;
}
var array = ['faruq','rofiq','jobbar','omar','omarFaruq','motin','hatem'];
var maximumCharacterOfArrayElements= megaFriend(array);
console.log(maximumCharacterOfArrayElements);