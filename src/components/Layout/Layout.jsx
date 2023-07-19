import { Container, Section } from 'components/Global.styled';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Grid } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<Container>
			<Header />
			<main>
				<Suspense
					fallback={
						<Section>
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
						</Section>
					}
				>
					<Outlet />
				</Suspense>
			</main>
		</Container>
	);
};
