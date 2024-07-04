function getWeather() {
            const apiKey = 'YOUR-API-KEY';
            const city = document.getElementById('city').value;

            if (!city) {
                alert('Please enter a city');
                return;
            }

            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},NG&appid=${apiKey}&units=metric`;

            fetch(currentWeatherUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching current weather data:', error);
                    alert('Error fetching current weather data. Please try again.');
                });
        }

        function displayWeather(data) {
            const weatherInfoDiv = document.getElementById('weather-info');
            const tempDivInfo = document.getElementById('temp-info');
            const weatherIcon = document.getElementById('weather-icon');

            if (data.cod === '404') {
                weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
            } else {
                const cityName = data.name;
                const temperature = Math.round(data.main.temp);
                const description = data.weather[0].description;
                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

                const temperatureHTML = `<p>${temperature}°C</p>`;
                const weatherHTML = `<p>${cityName}</p><p>${description}</p>`;

                tempDivInfo.innerHTML = temperatureHTML;
                weatherInfoDiv.innerHTML = weatherHTML;
                weatherIcon.src = iconUrl;
                weatherIcon.alt = description;
                weatherIcon.style.display = 'block';
            }
        }


// import requests

// def get_weather(city, country, api_key):
//     url = f"http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}&units=metric"
//     response = requests.get(url)
//     if response.status_code == 200:
//         return response.json()
//     else:
//         return None

// api_key = "YOUR_API_KEY"
// weather_data = get_weather("Lagos", "NG", api_key)

// if weather_data:
//     print(f"Current weather in {weather_data['name']}, {weather_data['sys']['country']}:")
//     print(f"Temperature: {weather_data['main']['temp']}°C")
//     print(f"Weather: {weather_data['weather'][0]['description']}")
// else:
//     print("Failed to retrieve weather data")
