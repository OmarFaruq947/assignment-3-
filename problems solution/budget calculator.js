//  2)  Budget calculate programme

function budgetCalculator(watch,phone,laptop) {  // function
    const watchProduct=watch*50; 
    const phoneProduct=phone*100;
    const laptopProduct=laptop*500;
    const totalCost = (watchProduct+phoneProduct+laptopProduct);
    return totalCost;
}
const allProduct=budgetCalculator(4, 4, 4);  // function call
console.log(allProduct);