import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav``;
export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	font-weight: bold;
	font-size: 28px;

	color: black;
	margin-right: 20px;
	&:active,
	&:hover {
		color: green;
	}
`;
