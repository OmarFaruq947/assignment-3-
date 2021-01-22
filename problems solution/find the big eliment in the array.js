var arr=[1,2,3,4,5,6,7,8,9,99];
 var max=arr[0];

 for (var i=0; i<arr.length; i++){
     var eliment= arr[i];
     if (eliment>max) {
         max=eliment;
     }
 }

 console.log(max);