let apiKey = "3ebea2dcb140c5e67ba19679b8718711";
let city = "Taipei";
let weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

async function weather() {
  try {
    let res = await fetch(weatherUrl);
    let data = await res.json();
    console.log(data);
    if (!res.ok) {
      console.log(`是其他回應錯誤: ${res.status} 原因：${res.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

weather();
