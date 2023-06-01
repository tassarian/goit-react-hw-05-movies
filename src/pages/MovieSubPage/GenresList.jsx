import { useFetchMovie } from '../../hooks/useFetchMovies';

export const GenresList = () => {
	const movie = useFetchMovie();
	const genres = movie.genres;
    // if () {}
	return (
		<ul>
            {genres.map(el => {
                return (
                    <li key={el.id} >
                        <p>{ el.name}</p>
                    </li>
                )
            })}
		</ul>
	);
};
