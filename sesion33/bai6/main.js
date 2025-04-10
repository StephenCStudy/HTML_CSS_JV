const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

const select = document.getElementById("city-select");
const button = document.querySelector("button");
const cityElement = document.getElementById("sup");
const tempElement = document.getElementById("do");
const aboutElement = document.querySelector(".about");
const iconElement = document.querySelector(".element span");

function displayWeather(cityName) {
    const data = weatherData[cityName];
    if (data) {
        cityElement.textContent = cityName;
        tempElement.textContent = `${data.temperature} °C`;
        iconElement.textContent = data.icon;
        aboutElement.innerHTML = `
            <p>${data.description}</p>
            <p>Độ ẩm: ${data.humidity}%</p>
            <p>Tốc độ gió: ${data.windSpeed} km/h</p>
        `;
    }
}

button.addEventListener("click", () => {
    const selectedCity = select.value;
    displayWeather(selectedCity);
});

window.onload = () => {
    displayWeather(select.value);
};
