import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchingMoviesReviews } from 'services/TMDBApi';

export const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		fetchSearchingMoviesReviews(movieId)
			.then(result => {
				setReviews(result.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, [movieId]);

	return (
		<ul>
			{reviews.length > 0 &&
				reviews.map(el => (
					<li key={el.id}>
						<b>{el.author_details.name}</b>
						<p>{el.content}</p>
						<hr />
					</li>
				))}
		</ul>
	);
};
