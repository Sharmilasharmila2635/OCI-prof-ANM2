function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>${data.weather[0].description}</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Try again later.</p>`;
        });
}
