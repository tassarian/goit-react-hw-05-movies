import { Section } from 'components/Global.styled';
import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from 'services/TMDBApi';
import {
	StyledInput,
	StyledItem,
	StyledList,
	StyledNavLink,
	StyledTitle,
} from './MoviesPage.styled';
import { StyledBox } from 'pages/HomePage/HomePage.styled';
import { Grid } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	const handleChange = e => {
		if (e.target.name === 'movie_input') {
			setSearchQuery(e.target.value);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			fetchSearchingMovies(searchQuery)
				.then(result => {
					const data = result.data.results;
					setMovies(data);
				})
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 1500);
	}, [searchQuery]);

	return (
		<Section>
			<StyledTitle>Find you movie</StyledTitle>
			<StyledInput
				name="movie_input"
				placeholder="Search"
				type="text"
				value={searchQuery}
				onChange={handleChange}
				autoComplete="off"
			/>
			{isLoading && searchQuery.length > 0 ? (
				<StyledBox>
					<Grid
						height="80"
						width="80"
						color="#4fa94d"
						ariaLabel="grid-loading"
						radius="12.5"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</StyledBox>
			) : (
				<StyledList>
					{movies &&
						movies.map(el => (
							<StyledItem key={el.id}>
								<StyledNavLink
									state={{ from: location }}
									to={`/movies/${el.id.toString()}`}
								>
									<img
										src={`https://image.tmdb.org/t/p/original${el?.poster_path}`}
										alt={el.title}
										loading="lazy"
									/>
									<span>{el.title}</span>
								</StyledNavLink>
							</StyledItem>
						))}
				</StyledList>
			)}
		</Section>
	);
};

export default MoviesPage;
