import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
`;

export const Name = styled.span`
  margin-right: auto;
`;

export const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  font-weight: 400;
`;

export const TextField = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 12px;
  max-width: 160px;
  margin: 50px auto 0 auto;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.88;
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

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 40px;
  max-width: 160px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.88;
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
