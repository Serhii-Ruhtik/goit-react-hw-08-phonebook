import React, { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import {
  changeContactData,
  deleteContact,
} from '../../redux/contacts/operations';
import { ModalWindow } from 'components/Modal/Modal';

import {
  BtnsWrapper,
  ListItem,
  Name,
  Number,
  TextField,
  Button,
  OptionButton,
} from './Contact.styled';
import { FormInput, Label, FormField } from '../AddContact/AddContact.styled';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, number: action.payload };
    default:
      return state;
  }
}

const Contact = ({ id, name, number }) => {
  const initialValues = { name, number };
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialValues);
  const dispatchOperator = useDispatch();

  const handleDelete = () => {
    setIsLoading(true);
    dispatchOperator(deleteContact(id));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = event => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  const handleSubmit = (_, action) => {
    dispatchOperator(
      changeContactData({ name: state.name, number: state.number, id })
    );
    action.resetForm();
    closeModal();
  };

  return (
    <ListItem id={id}>
      <TextField>
        <Name> {name} </Name> <Number> {number}</Number>
      </TextField>
      <BtnsWrapper>
        <OptionButton variant="contained" type="button" onClick={openModal}>
          Edit
        </OptionButton>
        <OptionButton type="button" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </OptionButton>
      </BtnsWrapper>
      {isOpen && (
        <ModalWindow onClose={closeModal}>
          <Formik initialValues={state} onSubmit={handleSubmit}>
            <FormField>
              <Label>
                Name
                <FormInput
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  placeholder="Enter name"
                  value={state.name}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Number
                <FormInput
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  placeholder="Enter number. For example: 098-084-68-40"
                  value={state.number}
                  onChange={handleChange}
                />
              </Label>
              <Button type="submit">Save changes</Button>
            </FormField>
          </Formik>
        </ModalWindow>
      )}
    </ListItem>
  );
};

export default Contact;
