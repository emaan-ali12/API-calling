
async function getWeather() {

    let city = document.getElementById("city").value;

    let result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter city name!";
        return;
    }

    try {

        let response = await fetch(
            `https://wttr.in/${encodeURIComponent(city)}?format=j1`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();

        let weather = data.current_condition[0];

        result.innerHTML = `
            <h2>${city}</h2>
            <h3>Temperature: ${weather.temp_C} °C</h3>
            <p>Weather: ${weather.weatherDesc[0].value}</p>
            <p>Humidity: ${weather.humidity}%</p>
            <p>Wind Speed: ${weather.windspeedKmph} km/h</p>
        `;

    }

    catch (error) {
        result.innerHTML = "Something went wrong!";
    }
}
