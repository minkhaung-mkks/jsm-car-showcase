import { CarProps, searchProps } from "@types"
export async function fetchCars(searchProps: searchProps) {
	const { manufacturer, fuel, year, limit, model } = searchProps
	const headers = {
		"X-RapidAPI-Key": "cee6710e73mshc9ea9d056f0d42dp158d84jsn1ba4fb13fd4f",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	}
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&model=${model}&limit=${limit}`
	const response = await fetch(url, { headers: headers })
	const result = await response.json()

	return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50 // Base rental price per day in dollars
	const mileageFactor = 0.1 // Additional rate per mile driven
	const ageFactor = 0.05 // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}
