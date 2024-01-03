import React from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { useAddContactMutation } from '../../redux/contactsApi';

import { FormInput, Label, Button, FormField } from './AddContact.styled';

const initialValues = {
  name: '',
  number: '',
};

const AddContact = ({ visibleContacts: contactsList }) => {
  const [addContact] = useAddContactMutation();

  const handleSubmit = ({ name, number }, actions) => {
    const check = contactsList.find(contact => contact.name === name);

    if (check) {
      toast.warn(`${name} is already in contacts.`, {
        autoClose: 3000,
        theme: 'dark',
      });
      return;
    }

    addContact({ name, number });
    actions.resetForm();
  };
  return (
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
        <Button type="submit"> Add new contact</Button>
      </FormField>
    </Formik>
  );
};
export default AddContact;
