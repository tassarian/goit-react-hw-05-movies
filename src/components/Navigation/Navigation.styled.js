import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px, 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`;