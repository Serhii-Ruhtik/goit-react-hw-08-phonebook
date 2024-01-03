import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

import { Label, Input } from 'components/AddContact/AddContact.styled';
import { Wrapper } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const changeHandler = event => {
    dispatch(filterContact(event.currentTarget.value.toLowerCase()));
  };
  return (
    <Wrapper>
      <Label>
        Find contacts by name:
        <Input type="text" onChange={changeHandler} />
      </Label>
    </Wrapper>
  );
};
export default Filter;
