import getdata from "./getdata";
import {
	setTodaySection,
	todaysHourlySection,
	sevenDaysSection,
} from "./screenController";
import "./index.css";

const weather = new getdata("Karachi");
setData();
async function setData() {
	try {
		await weather.fetchData();
		setTodaySection(
			weather.getCurrentConditions(),
			weather.getLocation(),
			weather.getDescription(),
		);
		todaysHourlySection(weather.getHours());
		sevenDaysSection(weather.getWeatherDays());
	} catch (error) {
		console.error("Error setting weather data:", error);
	}
}

const search = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");
function searchCity() {
	weather.changeLocation(search.value);
	setData();
	search.value = "";
}
search.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		searchCity();
	}
});
searchBtn.addEventListener("click", () => searchCity());
