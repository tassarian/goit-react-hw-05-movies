import { Section } from 'components/Global.styled';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSearchingMoviesById } from 'services/TMDBApi';
import {
	StyledBox,
	StyledButton,
	StyledImg,
	StyledInfoBox,
	StyledLink,
	StyledMainInfo,
	StyledSubTitle,
	StyledTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState({});
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		fetchSearchingMoviesById(movieId)
			.then(result => {
				setMovie(result.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [movieId]);

	return (
		<Section>
			<StyledButton
				type="button"
				onClick={() => navigate(location.state.from ?? '/')}
			>
				Go Back
			</StyledButton>
			<StyledBox>
				<StyledImg
					src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
					alt={movie.title}
				/>
				<StyledInfoBox>
					<StyledSubTitle>Title:</StyledSubTitle>
					<StyledTitle>{movie.title}</StyledTitle>

					<StyledSubTitle>Overview:</StyledSubTitle>
					<StyledMainInfo>{movie.overview}</StyledMainInfo>

					<StyledSubTitle>Rating:</StyledSubTitle>
					<StyledMainInfo>{movie.vote_average}</StyledMainInfo>

					<StyledSubTitle>Genres:</StyledSubTitle>
					{movie.genres?.map(el => (
						<p key={el.id}>{el.name}</p>
					))}
				</StyledInfoBox>
			</StyledBox>
			<StyledInfoBox>
				<h2>More information</h2>
				<StyledLink to="cast" state={{ from: location.state.from }}>
					Cast
				</StyledLink>
				<StyledLink to="reviews" state={{ from: location.state.from }}>
					Reviews
				</StyledLink>
			</StyledInfoBox>
			<Outlet />
		</Section>
	);
};

export default MovieDetails;
