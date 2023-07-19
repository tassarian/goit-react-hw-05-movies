import { Section } from 'components/Global.styled';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/TMDBApi';
import {
	StyledBox,
	StyledItem,
	StyledList,
	StyledNavLink,
	StyledTitle,
} from './HomePage.styled';
import { Grid } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
		fetchTrendingMovies()
			.then(result => {
				setMovies(result.data.results);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	return (
		<Section>
			<StyledTitle>Week trending movies</StyledTitle>
			{isLoading ? (
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
					{movies.map(el => {
						return (
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
						);
					})}
				</StyledList>
			)}
		</Section>
	);
};
