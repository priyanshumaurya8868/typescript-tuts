const ip1 = document.getElementById("ip1") as HTMLInputElement;
const ip2 = document.getElementById("ip2") as HTMLInputElement;  //typecasting
const btn = document.querySelector("button");

function add(num1: number, num2: number) {
  return num1 + num2;
}

//null check
btn?.addEventListener("click", (event) => {
  const num1 = ip1.value;
  const num2 = ip2.value;

  console.log(add(+num1, +num2)); //changing str to num by '+'
});
