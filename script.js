const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

button.addEventListener("click", () => {
  output.innerText = "";

  delay(2000)
    .then(() => {
      const num = Number(input.value);
      output.innerText = `Result: ${num}`;
      return num * 2;
    })
    .then((num) => {
      return delay(1000).then(() => {
        output.innerText = `Result: ${num}`;
        return num - 3;
      });
    })
    .then((num) => {
      return delay(1000).then(() => {
        output.innerText = `Result: ${num}`;
        return num / 2;
      });
    })
    .then((num) => {
      return delay(1000).then(() => {
        output.innerText = `Result: ${num}`;
        return num + 10;
      });
    })
    .then((final) => {
      return delay(1000).then(() => {
        output.innerText = `Final Result: ${final}`;
      });
    });
});
