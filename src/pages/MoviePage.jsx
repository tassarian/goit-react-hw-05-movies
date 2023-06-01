const { useState, useEffect } = require('react');
const {
	useSearchParams,
	useLocation,
	Link,
	Outlet,
} = require('react-router-dom');
const { getMovieBySearchQuery } = require('services/services');

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchText, setSearchText] = useState('');
	const query = searchParams.get('query');
	const location = useLocation();

	useEffect(() => {
		if (!query) {
			return;
		}
		getMovieBySearchQuery(query).then(setMovies);
	}, [query]);

	const handleChangeInput = e => {
		const value = e.target.value;
		setSearchText(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		setSearchParams({ query: form.elements.search.value });
		form.reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchText}
					name="search"
					onChange={handleChangeInput}
				/>
				<button type="submit" disabled={!searchText}>
					Search
				</button>
			</form>
			{movies.length !== 0 && (
				<>
					{''}
					<ul>
						{movies.map(({ title, id }) => (
							<li key={id}>
								<Link to={`${id}`} state={{ from: location }}>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
			<Outlet />
		</>
	);
};

export default MoviesPage
