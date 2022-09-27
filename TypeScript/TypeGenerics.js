function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push("hi");
myStrArr.push(100);
function getArray1(items) {
    return new Array().concat(items);
}
var myNumArr1 = getArray1([1, 2, 3]);
var myStrArr1 = getArray1(["deposit", "withdraw"]);
myNumArr1.push(4);
myStrArr1.push("money");
myNumArr1.push("text");
myStrArr1.push(5);
