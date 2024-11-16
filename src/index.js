import getdata from "./getdata";
import {
	setTodaySection,
	todaysHourlySection,
	sevenDaysSection,
} from "./screenController";
import "./index.css";

const weather = new getdata("Rawalpindi");
setData();
async function setData() {
	try {
		await weather.fetchData();

		// Check if valid data is returned
		const currentConditions = weather.getCurrentConditions();
		// Update sections with weather data
		setTodaySection(
			currentConditions,
			weather.getLocation(),
			weather.getDescription(),
		);
		todaysHourlySection(weather.getHours());
		sevenDaysSection(weather.getWeatherDays());
	} catch (error) {
		// Handle errors from fetchData
		alert(
			"Failed to fetch weather data. Please check the city name or try again later.",
		);
		console.error("Error setting weather data:", error);
	}
}

const search = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");
const searchHistoryList = document.querySelector("#search-history");
const clearHistoryBtn = document.querySelector("#clear-history-btn");

function loadSearchHistory() {
	const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
	searchHistoryList.innerHTML = "";

	history.forEach((city) => {
		const li = document.createElement("li");
		li.textContent = city;
		li.classList.add("search-item");
		li.addEventListener("click", () => {
			search.value = city; // Set the city in the search bar
			searchCity(); // Fetch weather for the selected city
		});
		searchHistoryList.appendChild(li);
	});
}

// Function to save a city to search history
function saveToSearchHistory(city) {
	let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
	// Avoid duplicates
	if (!history.includes(city)) {
		history.push(city);
		localStorage.setItem("searchHistory", JSON.stringify(history));
	}
	loadSearchHistory(); // Update the displayed history
}

// Function to clear search history
function clearSearchHistory() {
	localStorage.removeItem("searchHistory");
	loadSearchHistory(); // Update the displayed history
}

// Event listener for the clear history button
clearHistoryBtn.addEventListener("click", clearSearchHistory);

function searchCity() {
	const query = search.value.trim(); // Trim whitespace
	if (query === "") {
		console.warn("Search input is empty. No API call made.");
		return;
	}
	weather.changeLocation(search.value);
	setData();
	saveToSearchHistory(query);
	search.value = "";
}
search.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		searchCity();
	}
});
loadSearchHistory();
searchBtn.addEventListener("click", () => searchCity());
