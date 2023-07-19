import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchingMoviesCast } from 'services/TMDBApi';

export const Cast = () => {
	const [cast, setCast] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		fetchSearchingMoviesCast(movieId)
			.then(result => {
				setCast(result.data.cast);
			})
			.catch(err => {
				console.log(err);
			});
	}, [movieId]);

	return (
		<ul>
			{cast &&
				cast.map(el => (
					<li key={el.id}>
						<img
							src={`https://image.tmdb.org/t/p/original${el.profile_path}`}
							alt={el.name}
							width="100"
						/>
						<p>{el.character}</p>
						<b>{el.name}</b>
						<hr />
					</li>
				))}
		</ul>
	);
};
