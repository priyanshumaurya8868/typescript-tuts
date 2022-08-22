"use strict";
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2"); //typecasting
const btn = document.querySelector("button");
// const btn = document.querySelector("button")!;
const numArr = [];
const strArr = [];
//union types
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
const printResult = (obj) => {
    console.log(obj);
};
//null check
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", (event) => {
    const num1 = ip1.value;
    const num2 = ip2.value;
    const numRes = add(+num1, +num2);
    const strRes = add(num1, num2);
    numArr.push(+numRes);
    strArr.push(strRes);
    console.log(numRes);
    console.log(strRes);
    printResult({ val: numRes, time: new Date() });
    console.log("num arr" + numArr);
    console.log("str arr : " + strArr);
    // console.log(add(true,false));  // boolean wont be accepected by the func
});
