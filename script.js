document.getElementById('get-weather-btn').addEventListener('click', function() {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (cityName !== '') {
        const apiKey = '43c93b3eaaf72a25f3035cff2d6e0aac';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weather-info');
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                // Display weather information and icon
                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
                
                const iconElement = document.createElement('img');
                iconElement.src = iconUrl;
                weatherInfo.appendChild(iconElement);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
            });
    } else {
        alert('Please enter a city name.');
    }
});