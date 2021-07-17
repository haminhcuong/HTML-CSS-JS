const APP_ID = "9a677fa111969e35cba7216b6637be11";
const DEFAULT_VALUE = "--";

const inputElement = document.querySelector("input");

inputElement.addEventListener("change", (e) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&appid=${APP_ID}&units=metric&lang=vi`;
  fetch(api).then(async (res) => {
    const data = await res.json();
    console.log(data);
    document.querySelector(".city-name").innerText = data.name || DEFAULT_VALUE;
    document.querySelector(".weather-state").innerText =
      data.weather[0].description || DEFAULT_VALUE;
    document
      .querySelector("img")
      .setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    document.querySelector(".temperature").innerText =
      data.main.temp.toFixed(2) || DEFAULT_VALUE;
    document.querySelector(".sunrise").innerText =
      moment.unix(data.sys.sunrise).format(`HH:mm`) || DEFAULT_VALUE;
    document.querySelector(".sunset").innerText =
      moment.unix(data.sys.sunset).format(`HH:mm`) || DEFAULT_VALUE;
    document.querySelector(".humidity").innerText =
      data.main.humidity + " %" || DEFAULT_VALUE;
    document.querySelector(".wind-speed").innerText =
      (data.wind.speed * 3.6).toFixed(2) + " km/h" || DEFAULT_VALUE;
  });
});
