const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMovieCast } = require('services/services');

const Cast = () => {
	const [cast, setCast] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getMovieCast(id).then(setCast);
	}, [id]);

	return (
		<>
			{cast.length === 0 ? (
				<h3>There is such information</h3>
			) : (
				<ul>
					{cast.map(({ profile_path, name, character, id }) => (
						<li key={id}>
							<img
								src={
									`https://image.tmdb.org/t/p/w200/${profile_path}`
								}
								alt="img"
								width={50}
							/>
							<p>{name}</p>
							<p>{character}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Cast;
