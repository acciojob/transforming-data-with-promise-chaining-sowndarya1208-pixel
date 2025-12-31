const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delay(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

button.addEventListener("click", () => {
  output.innerText = "";

  delay(Number(input.value), 2000)
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return delay(num * 2, 2000);
    })
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return delay(num - 3, 1000);
    })
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return delay(num / 2, 1000);
    })
    .then((num) => {
      output.innerText = `Final Result: ${num + 10}`;
    });
});
