import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;

  color: black;
  transition: color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &.active {
    color: #188ce8;
    text-decoration: underline;
  }

  &:not(.active):hover {
    color: #188ce8;
  }
`;
