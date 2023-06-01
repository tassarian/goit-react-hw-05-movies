import axios from 'axios';

const API_KEY = '8fa80d8759994b9cdbb33c7e5674b4c6';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
	const data = await axios.get(
		`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
	);
	return data.data.results;
}

export async function getMovieBySearchQuery(query) {
	const data = await axios.get(
		`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
	);
	return data.data.results;
}

export async function getMovieById(id) {
	const data = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const movie = data.data;
  return movie;
}

export async function getMovieCast(id) {
	const data = await axios.get(
		`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
	);
	return data.data.cast;
}

export async function getMovieReviews(id) {
	const data = await axios.get(
		`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
	);
	return data.data.results;
}
