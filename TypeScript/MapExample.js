var proArray = [
    {price:"100", product:"Mobile"},
    {price:"200", product:"Mouse"},
    {price:"300", product:"Monitor"},
    {price:"400", product:"Mic"},
];

//map
var mapPro = proArray.map(function(value){
    return value.price;
}) 
console.log(mapPro);


//map withn arrow
var arrowPro = proArray.map(value => value.price);
console.log(arrowPro);

//filter
var filterPro = proArray.filter(function(value){
    if(value.price<300){
        return true;
    }
})
console.log(filterPro);

//filter with arrow
const arrowvalue = proArray.filter(value => value.price>300);
console.log(arrowvalue);

//sort
const sortProduct = proArray.sort((a,b) => (a.product > b.product ? 1 : -1));
console.log(sortProduct);
