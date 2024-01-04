import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  box-sizing: border-box;
  display: block;

  font-size: 16px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  width: 20vw;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  border: 1px solid;
  border-color: rgba(33, 33, 33, 0.2);
  outline: transparent;
  font-size: 16px;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
