import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	display: inline-block;
	text-decoration: none;
	font-weight: bold;
	color: black;
	margin-right: 20px;
	margin-bottom: 20px;
	&:active,
	&:hover {
		color: green;
	}
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin-bottom: 10px;
`;

export const StyledSubTitle = styled.p``;

export const StyledMainInfo = styled.p`
	margin-bottom: 30px;
	font-weight: bold;
	font-size: 24px;
`;

export const StyledTitle = styled.h2`
	display: inline-block;
	margin-bottom: 30px;
`;

export const StyledBox = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledInfoBox = styled.div`
	h2 {
		margin-bottom: 10px;
	}
`;

export const StyledImg = styled.img`
	width: 400px;
	height: 500px;
	margin-right: 30px;
`;
