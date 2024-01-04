import styled from '@emotion/styled';

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 30px;
  height: 30px;

  border: transparent;
  border-radius: 50%;
  background-color: #fff;
  color: #757575;

  padding: 0;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #188ce8;
  }
`;
