// 3) Hotel cost management system

function hotelCost(day) {
    var cost=0;
    if (day<=10) {
        var cost=day*100;
    }
    else if(day<=20){
        var firstTenDay=10*100;
        var remaining=day-10;
        var twentyDay=remaining*80;
        cost=firstTenDay+twentyDay;
    }
    else{
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




