import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout'));
const Homepage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviePage'));
const MovieSubPage = lazy(() => import('pages/MovieSubPage/MovieSubPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="movies/:id" element={<MovieSubPage />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};
