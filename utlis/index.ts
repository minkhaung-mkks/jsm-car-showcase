const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars"
const options = {
	method: "GET",
	params: { model: "corolla" },
	headers: {
		"X-RapidAPI-Key": "cee6710e73mshc9ea9d056f0d42dp158d84jsn1ba4fb13fd4f",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	},
}

try {
	const response = await fetch(url, options)
	const result = await response.text()
} catch (error) {
	console.error(error)
}

export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key": "cee6710e73mshc9ea9d056f0d42dp158d84jsn1ba4fb13fd4f",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	}
	const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars"
	const response = await fetch(url, { headers: headers })
	const result = await response.json()

	return result
}
