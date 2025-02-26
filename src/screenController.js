import cloudy from "./images/cloudy.png";
import partlycloudy from "./images/partlycloudy.png";
import rain from "./images/rain.png";
import sun from "./images/sun.png";

function setTodaySection(conditions, location, description) {
	let iconDiv = document.querySelector(".icon");
	let conditionsDiv = document.querySelector(".conditions");
	let humidityDiv = document.querySelector(".humidity");
	let feelsLikeDiv = document.querySelector(".feels-like");
	let cityDiv = document.querySelector(".city");
	let tempDiv = document.querySelector(".temperature");
	let descriptionDiv = document.querySelector(".description");

	conditionsDiv.textContent = conditions.conditions;
	feelsLikeDiv.textContent =
		"Feels like: " + Math.round(((conditions.feelslike - 32) * 5) / 9) + "°C";
	humidityDiv.textContent = "Humidity: " + conditions.humidity + "%";
	cityDiv.textContent = location;
	tempDiv.textContent = Math.round(((conditions.temp - 32) * 5) / 9) + "°C";
	descriptionDiv.textContent = description;

	// Clear the previous icon before appending the new one
	iconDiv.innerHTML = "";
	let image = document.createElement("img");
	image.src = determineIcon(conditions.conditions);
	iconDiv.appendChild(image);
}

function todaysHourlySection(hours) {
	// Declare and initialize relevantHours as an array
	const relevantHours = [];
	for (let i = 1; i < hours.length; i += 4) {
		relevantHours.push(hours[i]);
	}
	console.log(relevantHours);
	const hourContainerDivs = document.querySelectorAll(".today-hours-cards");
	hourContainerDivs.forEach((hourdiv, index) => {
		// Get child elements of the specific hourdiv
		const hoursIconDiv = hourdiv.querySelector(".today-hours-icon");
		const hoursTempDiv = hourdiv.querySelector(".today-hours-temp");
		const hoursHumidDiv = hourdiv.querySelector(".today-hours-humidity");
		const hoursTimeDiv = hourdiv.querySelector(".today-hours-time");

		// Clear the previous icon before appending a new one
		hoursIconDiv.innerHTML = "";

		hoursTempDiv.textContent =
			Math.round(((relevantHours[index].temp - 32) * 5) / 9) + "°C";
		hoursHumidDiv.textContent =
			"Humiditiy: " + relevantHours[index].humidity + "%";
		hoursTimeDiv.textContent = relevantHours[index].datetime;

		let image = document.createElement("img");
		image.src = determineIcon(relevantHours[index].conditions);
		hoursIconDiv.appendChild(image);
	});
}

function sevenDaysSection(days) {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const sevenDaysContainers = document.querySelectorAll(".seven-cards");
	sevenDaysContainers.forEach((day, index) => {
		// Get child elements of the specific day container
		const dayIconDiv = day.querySelector(".seven-icon");
		const dayConditionDiv = day.querySelector(".seven-condition");
		const dayNameDiv = day.querySelector(".seven-day");
		const dayTempDiv = day.querySelector(".seven-temp");

		// Clear the previous icon before appending a new one
		dayIconDiv.innerHTML = "";

		let image = document.createElement("img");
		image.src = determineIcon(days[index].conditions);
		dayIconDiv.appendChild(image);

		dayConditionDiv.textContent = days[index].conditions;
		dayTempDiv.textContent =
			Math.round(((days[index].temp - 32) * 5) / 9) + "°C";

		// Convert datetime string to day of the week
		const dateObj = new Date(days[index].datetime);
		const dayOfWeek = dateObj.getDay();
		dayNameDiv.textContent = daysOfWeek[dayOfWeek];
	});
}

function determineIcon(conditions) {
	if (conditions === "Clear") return sun;
	else if (conditions === "Rain" || conditions === "Rain, Partially cloudy" || conditions === "Rain, Overcast" ) return rain;
	else if (conditions === "Partially cloudy") return partlycloudy;
	else if (conditions === "Cloudy" || conditions === "Overcast") return cloudy;
	return sun; // Default to sunny if condition is unknown
}

let isCelsius = true;

const tempToggleBtn = document.querySelector("#temp-toggle-btn");

function fahrenheitToCelsius(temp) {
	return Math.round(((temp - 32) * 5) / 9);
}

function celsiusToFahrenheit(temp) {
	return Math.round((temp * 9) / 5 + 32);
}

// Update temperatures across the app
function updateTemperatures() {
	const tempDiv = document.querySelector(".temperature");
	const feelsLikeDiv = document.querySelector(".feels-like");
	const hourlyCards = document.querySelectorAll(".today-hours-temp");
	const sevenDayCards = document.querySelectorAll(".seven-temp");

	const currentTemp = parseInt(tempDiv.textContent);
	const feelsLikeTemp = parseInt(feelsLikeDiv.textContent.split(": ")[1]);
	if (isNaN(currentTemp) || isNaN(feelsLikeTemp)) return;

	tempDiv.textContent = isCelsius
		? fahrenheitToCelsius(currentTemp) + "°C"
		: celsiusToFahrenheit(currentTemp) + "°F";

	feelsLikeDiv.textContent = isCelsius
		? "Feels like: " + fahrenheitToCelsius(feelsLikeTemp) + "°C"
		: "Feels like: " + celsiusToFahrenheit(feelsLikeTemp) + "°F";

	hourlyCards.forEach((card) => {
		const hourlyTemp = parseInt(card.textContent);
		card.textContent = isCelsius
			? fahrenheitToCelsius(hourlyTemp) + "°C"
			: celsiusToFahrenheit(hourlyTemp) + "°F";
	});

	sevenDayCards.forEach((card) => {
		const dailyTemp = parseInt(card.textContent);
		card.textContent = isCelsius
			? fahrenheitToCelsius(dailyTemp) + "°C"
			: celsiusToFahrenheit(dailyTemp) + "°F";
	});
}

// Event listener for toggle button
tempToggleBtn.addEventListener("click", () => {
	isCelsius = !isCelsius; // Toggle the unit
	tempToggleBtn.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
	updateTemperatures(); // Update the UI
});

export { todaysHourlySection, setTodaySection, sevenDaysSection };
