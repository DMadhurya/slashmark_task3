document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const apiKey = '79b43af6524abc7e6d6bcf855dcbdc3f';
    const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey});
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  if (data.cod === 200) {
    const cityName = data.name;
    const temperature = (data.main.temp - 273.15).toFixed(1); // Convert temperature from Kelvin to Celsius
    const description = data.weather[0].description;
    weatherInfo.innerHTML = <h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>;
  } else {
    weatherInfo.innerHTML = '<p>City not found</p>';
  }
}
