function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    if (cityName === '') {
      alert('Please enter a city name');
      return;
    }
  
    const apiKey = 'fe86c25b5648f7cd77c3b78e783cb319'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          alert('City not found');
          return;
        }
  
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  