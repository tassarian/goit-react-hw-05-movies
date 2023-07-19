import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8fa80d8759994b9cdbb33c7e5674b4c6';

export async function fetchTrendingMovies() {
	try {
		const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
			params: {
				language: 'en-US',
				api_key: API_KEY,
			},
		});
		return response;
	} catch (error) {
		return console.log(error);
	}
}

export async function fetchSearchingMovies(searchQuery) {
	try {
		const response = await axios.get(`${BASE_URL}/search/movie`, {
			params: {
				page: 1,
				api_key: API_KEY,
				query: searchQuery,
				include_adult: false,
				language: 'en-US',
			},
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchSearchingMoviesById(id) {
	try {
		const response = await axios.get(`${BASE_URL}/movie/${id}`, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
			},
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchSearchingMoviesCast(id) {
	try {
		const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
			},
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchSearchingMoviesReviews(id) {
	try {
		const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
			},
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
