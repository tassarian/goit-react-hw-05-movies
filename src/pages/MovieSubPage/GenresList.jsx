import { useFetchMovie } from 'components/hooks/useFetchMovies';

export const GenresList = () => {
	const movie = useFetchMovie();
	const genres = movie.genres;
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
