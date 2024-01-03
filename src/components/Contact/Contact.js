import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactsApi';

import { ListItem, Number, Button, TextField } from './Contact.styled';

const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
  };
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ListItem>
  );
};
export default Contact;
