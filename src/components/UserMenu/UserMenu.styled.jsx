import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const ExtraText = styled.span`
  color: #188ce8;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 80px;
  height: 30px;

  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.06em;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 4px;
  border-color: transparent;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
  }
`;
