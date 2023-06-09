import { useFetchMovie } from '../../hooks/useFetchMovies';
// import { GenresList } from './GenresList';
const { useLocation, useNavigate, Link, Outlet } = require('react-router-dom');
const { StyledWrapper, StyledUl } = require('./MovieSubPage.styled');

const MovieSubPage = () => {
	const movie = useFetchMovie();
	const location = useLocation();
	const navigate = useNavigate();
	const genres = movie.genres;
	console.log(genres);
	if (movie && genres?.length) {
		return (
			<>
				<button
					onClick={() => {
						navigate(location?.state?.from);
					}}
				>
					Go Back
				</button>
				<StyledWrapper>
					<img
						src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
						alt="movie-poster"
						width="400"
					/>
					<div>
						<h2>{movie.title}</h2>
						<p>{`User score: ${movie.vote_average}%`}</p>
						<h3>Overview</h3>
						<p>{movie.overview}</p>
						<h3>Genres</h3>
						<ul>
							{genres.map(el => {
								return (
									<li key={el.id}>
										<p>{el.name}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</StyledWrapper>
				<div>
					<h4>Additional information</h4>
					<StyledUl>
						<li>
							<Link to="cast" state={location.state}>
								Cast
							</Link>
						</li>
						<li>
							<Link to="reviews" state={location.state}>
								Reviews
							</Link>
						</li>
					</StyledUl>
				</div>
				<Outlet />
			</>
		);
	}
};

export default MovieSubPage;
