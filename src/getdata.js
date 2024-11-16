//Get the data from visual crossings using the api

export default class {
	constructor(location) {
		this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=YXXEU9VPW2DP5HQ28QW5ULY78`;
		this.response;
	}

	changeLocation(location) {
		return (this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.split(" ").join("+")}?key=YXXEU9VPW2DP5HQ28QW5ULY78`);
	}

	async fetchData() {
		try {
			const response = await fetch(this.url, { mode: "cors" });

			// Handle non-200 responses
			if (!response.ok) {
				throw new Error(`Error ${response.status}: ${response.statusText}`);
			}

			const responseJson = await response.json();
			this.response = responseJson;
		} catch (error) {
			console.error("Error fetching weather data:", error);
			this.response = null; // Reset response on error
			throw error; // Re-throw the error to be handled by the caller
		}
	}

	getWeatherDays() {
		return this.response.days.slice(1, 8);
	}

	getLocation() {
		return this.response.resolvedAddress;
	}
	getCurrentConditions() {
		return this.response.currentConditions;
	}
	getHours() {
		return this.response.days[0].hours;
	}
	getDescription() {
		return this.response.description;
	}
}
