const jokeBtn = document.querySelector("#jokeBtn");
let jokeOutput = document.querySelector("#jokeOutput");

async function joke() {
  try {
    let res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky"
    );
    //請求失敗的狀態碼是 404 資源未找到 或 500
    if (!res.ok) {
      console.log(`回應有誤但是非伺服器: ${res.status}`);
    }
    let data = await res.json();
    console.log("得到的笑話回應：", data.joke);
    jokeOutput.innerText = `${data.joke} \n`;
  } catch (error) {
    console.log("失敗回應是：", error);
  }
}

joke();

jokeBtn.addEventListener("click", () => {
  joke();
});
