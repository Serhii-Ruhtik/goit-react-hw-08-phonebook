import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

import { Button } from './AddContact.styled';

import { ModalWindow } from 'components/Modal/Modal';
import { FormInput, Label, FormField, AddBtn } from './AddContact.styled';

const initialValues = {
  name: '',
  number: '',
};

const AddContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { items: contactsList } = useSelector(selectContacts);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = ({ name, number }, actions) => {
    const check = contactsList.find(contact => contact.name === name.trim());

    if (check) {
      toast.warn(`${name} is already in contacts.`, {
        autoClose: 3000,
        theme: 'dark',
      });
      return;
    }

    dispatch(addContact({ name, number }));
    actions.resetForm();
    closeModal();
  };

  return (
    <>
      <AddBtn Button type="button" onClick={openModal}>
        <AiOutlineUserAdd />
        Add contact
      </AddBtn>
      {isOpen && (
        <ModalWindow onClose={closeModal}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                />
              </Label>
              <Button type="submit">Add new contact</Button>
            </FormField>
          </Formik>
        </ModalWindow>
      )}
    </>
  );
};

export default AddContact;
