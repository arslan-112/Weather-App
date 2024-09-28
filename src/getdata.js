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
			let response = await fetch(this.url, { mode: "cors" });
			let responseJson = await response.json();
			this.response = await responseJson;
		} catch (error) {
			console.error(error);
			return "error";
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
