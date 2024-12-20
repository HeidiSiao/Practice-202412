const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const clock = document.querySelector("#alarm");
const output = document.querySelector("#output");

//創建一個executor函數 參數是 r、r(本身也是function)
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(`${person} 延遲秒數設定要多於 1000啦`);
    } else {
      setTimeout(() => {
        resolve(`${person} 趕快起床啦!`);
      }, delay);
    }
  });
}

clock.addEventListener("click", (e) => {
  let promiseObject = alarm(name.value, delay.value);
  promiseObject
    .then((message) => {
      output.innerText = message;
    })
    .catch((error) => {
      output.innerText = error;
    });
});
