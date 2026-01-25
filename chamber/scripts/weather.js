const apiKey = "00a7f5cb45e996f25ab3aa75373231b5";
const lat = 40.5708;   
const lon = -111.8431;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function loadWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather fetch failed");

    const data = await response.json();

    // CURRENT WEATHER
    document.getElementById("current-temp").textContent =
      Math.round(data.list[0].main.temp);

    document.getElementById("weather-desc").textContent =
      data.list[0].weather[0].description;

    document.getElementById("humidity").textContent =
      data.list[0].main.humidity;

    const iconCode = data.list[0].weather[0].icon;
const desc = data.list[0].weather[0].description;

const container = document.querySelector('#weather-icon-container');

const img = document.createElement('img');
img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
img.alt = desc;
img.width = 60;

container.appendChild(img);

    // 3-DAY FORECAST
    document.getElementById("day1").textContent =
      Math.round(data.list[0].main.temp);

    document.getElementById("day2").textContent =
      Math.round(data.list[8].main.temp);

    document.getElementById("day3").textContent =
      Math.round(data.list[16].main.temp);

  } catch (error) {
    console.error(error);
  }
}

loadWeather();