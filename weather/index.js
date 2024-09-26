const getweather = async (cityname) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityname}&units=metric`);
    let res = await req.json();
    console.log(res);
    ui(res);
}

const getweatherbylocation = async (lat, long) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=Name&units=metric&lat=${lat}&long=${long}`);
    let res = await req.json();
    console.log(res);
    ui(res);
}

const ui = (data) => {
    let temp = `<header>
        <h1>Weather Forecast</h1>
        </div>
      </header>
      <section class="weather-display" id="weather-display">
        <div class="weather-card">
          <h2 id="city-name">City Name</h2>
          <p id="temp">Temperature: 0°C</p>
          <p id="condition">Condition: Clear</p>
          <div class="weather-icon">
            <img src="https://flyclipart.com/thumb2/circle-icons-weather-171782.png">
          </div>
        </div>
      </section>`;
    document.getElementById("container").innerHTML = temp;
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = `Temp: ${data.main.temp}°C`;
    document.getElementById("condition").innerHTML = `Condition: ${data.weather[0].description}`;
}

const handlesubmit = (e) => {
    e.preventDefault();
    let cityname = document.getElementById("city-input").value;
    getweather(cityname);
}

document.getElementById("form").addEventListener("submit", handlesubmit);

const getlocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(position);
        getweatherbylocation(lat, lon);
    });
}

getlocation();