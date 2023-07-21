import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { lazy } from 'react';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
};
