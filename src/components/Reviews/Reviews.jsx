const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMovieReviews } = require('services/services');

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getMovieReviews(id).then(setReviews);
	}, [id]);

	return (
		<>
			{reviews.length === 0 ? (
				<h3>There is no reviews for this movie</h3>
			) : (
				<ul>
					{reviews.map(({ author, id, content }) => (
						<li key={id}>
							<h4>Author: {author}</h4>
							<p>{content}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Reviews
