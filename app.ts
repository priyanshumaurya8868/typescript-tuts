const ip1 = document.getElementById("ip1") as HTMLInputElement;
const ip2 = document.getElementById("ip2") as HTMLInputElement;  //typecasting
const btn = document.querySelector("button");
// const btn = document.querySelector("button")!;

//union types
function add(num1: number|string, num2: number|string) {
  if(typeof num1 === "number" && typeof num2 == "number"){
    return num1 + num2;
  }
  else if(typeof num1 === 'string' && typeof num2 === 'string'){
    return num1+num2;
  }
  
  return +num1 + +num2

}

//null check
btn?.addEventListener("click", (event) => {
  const num1 = ip1.value;
  const num2 = ip2.value;

  console.log(add(+num1, +num2)); //changing str to num by '+'
  console.log(add(num1, num2));
  // console.log(add(true,false));  // boolean wont be accepected by the func
});
