function getArray(items: any[]): any[]{
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push("hi");
myStrArr.push(100);

function getArray1<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}
let myNumArr1 = getArray1<number>([1,2,3]);
let myStrArr1 = getArray1<string>(["deposit", "withdraw"]);
myNumArr1.push(4);
myStrArr1.push("money");

myNumArr1.push("text");
myStrArr1.push(5);
