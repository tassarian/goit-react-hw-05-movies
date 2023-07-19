import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledInput = styled.input``;

export const StyledButton = styled.button``;

export const StyledTitle = styled.h1`
	margin-bottom: 20px;
`;

export const StyledList = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`;

export const StyledItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	font-weight: bold;
	color: black;
	img {
		width: 200px;
		height: 300px;
	}
	span {
		margin-top: 10px;
		max-width: 200px;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
`;
